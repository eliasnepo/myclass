package com.myclass.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.dto.CourseDTO;
import com.myclass.dto.CourseWithDetailsDTO;
import com.myclass.entities.Course;
import com.myclass.entities.User;
import com.myclass.repositories.CourseRepository;
import com.myclass.services.exceptions.ForbiddenException;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository repository;
	
	@Autowired
	private AuthService authService;

	@Transactional
	public Page<CourseDTO> findListOfCoursesByUserAuthenticated(Pageable pageable) {
		User user = authService.authenticated();
		Page<Course> page = repository.find(user, pageable);
		return page.map(course -> new CourseDTO(course));
	}
	
	@Transactional(readOnly = true)
	public CourseWithDetailsDTO findDetailsOfACourse(Long id) {
		Course course = repository.getOne(id);
		User user = authService.authenticated();
		
		if (!course.getUsers().contains(user)) {
			throw new ForbiddenException("Access denied");
		}
		
		CourseWithDetailsDTO dto = new CourseWithDetailsDTO(course, course.getLessons());
		return dto;
	}

}
