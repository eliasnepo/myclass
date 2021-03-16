package com.myclass.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.dto.CourseViewDTO;
import com.myclass.services.CourseService;

@RestController
@RequestMapping(value = "/courses")
public class CoursesRecourse {

	@Autowired
	private CourseService service;
	
	@GetMapping
	public ResponseEntity<List<CourseViewDTO>> findListOfCoursesByUserAuthenticated() {
		List<CourseViewDTO> list = service.findListOfCoursesByUserAuthenticated();
		return ResponseEntity.ok().body(list);
	}
}
