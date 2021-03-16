package com.myclass.services;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.dto.CourseViewDTO;
import com.myclass.entities.Course;
import com.myclass.entities.User;

@Service
public class CourseService {
	
	@Autowired
	private AuthService authService;

	@Transactional
	public List<CourseViewDTO> findListOfCoursesByUserAuthenticated() {
		User user = authService.authenticated();
		Set<Course> list = user.getCourses();
		return list.stream().map(x -> new CourseViewDTO(x)).collect(Collectors.toList());
	}

}
