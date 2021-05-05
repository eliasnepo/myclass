package com.myclass.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<Page<CourseDTO>> findListOfCoursesByUserAuthenticated(
			@RequestParam(value = "page", defaultValue = "0") Integer page) {
		
		PageRequest pageRequest = PageRequest.of(page, 4);
		Page<CourseDTO> list = service.findListOfCoursesByUserAuthenticated(pageRequest);
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CourseWithDetailsDTO> findDetailsOfACourse(@PathVariable Long id) {
		CourseWithDetailsDTO dto = service.findDetailsOfACourse(id);
		return ResponseEntity.ok().body(dto);
	}
}
