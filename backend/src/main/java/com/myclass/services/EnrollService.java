package com.myclass.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.dto.CourseDTO;
import com.myclass.entities.Course;
import com.myclass.entities.User;
import com.myclass.repositories.CourseRepository;

@Service
public class EnrollService {

	@Autowired
	public CourseRepository repository;
	
	@Autowired
	public AuthService authService;
	
	@Transactional
	public List<CourseDTO> findAvailableEnrollCourses() {
		User user = authService.authenticated();
		
		List<CourseDTO> userCourses = new ArrayList<>();
		user.getCourses().forEach(x -> userCourses.add(new CourseDTO(x)));
		
		List<Course> allCourses = repository.findAll();
		
		List<CourseDTO> allCoursesDTO = new ArrayList<>();
		allCourses.forEach(x -> allCoursesDTO.add(new CourseDTO(x)));
		
		List<CourseDTO> availableCourses = new ArrayList<>();
		
		for(Iterator<CourseDTO> it = allCoursesDTO.iterator(); it.hasNext();) {
			CourseDTO course = it.next();
			boolean isNotEnrolled = true;
			
			for(Iterator<CourseDTO> it2 = userCourses.iterator(); it2.hasNext();) {
				CourseDTO userCourse = it2.next();
				
				if(course.getId() == userCourse.getId()) {
					isNotEnrolled = false;
					it.remove();
					it2.remove();
				}
			}
			
			if(isNotEnrolled) {
				availableCourses.add(course);
			}
		}
		
		return availableCourses;
	}
}
