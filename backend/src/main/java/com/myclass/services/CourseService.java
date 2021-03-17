package com.myclass.services;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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
	public List<CourseDTO> findListOfCoursesByUserAuthenticated() {
		User user = authService.authenticated();
		Set<Course> list = user.getCourses();
		return list.stream().map(x -> new CourseDTO(x)).collect(Collectors.toList());
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
