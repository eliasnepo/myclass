package com.myclass.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.dto.CourseDTO;
import com.myclass.dto.CourseWithDetailsDTO;
import com.myclass.services.CourseService;

@RestController
@RequestMapping(value = "/courses")
public class CoursesRecourse {

	@Autowired
	private CourseService service;
	
	@GetMapping
	public ResponseEntity<List<CourseDTO>> findListOfCoursesByUserAuthenticated() {
		List<CourseDTO> list = service.findListOfCoursesByUserAuthenticated();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CourseWithDetailsDTO> findDetailsOfACourse(@PathVariable Long id) {
		CourseWithDetailsDTO dto = service.findDetailsOfACourse(id);
		return ResponseEntity.ok().body(dto);
	}
}
