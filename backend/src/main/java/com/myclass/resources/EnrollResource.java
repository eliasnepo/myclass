package com.myclass.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.dto.CourseDTO;
import com.myclass.dto.UserEnrollDTO;
import com.myclass.services.EnrollService;
import com.myclass.services.UserService;

@RestController
@RequestMapping(value = "/enroll")
public class EnrollResource {
	
	@Autowired
	public UserService userService;
	
	@Autowired
	public EnrollService enrollService;
	
	@GetMapping
	public ResponseEntity<List<CourseDTO>> getAvailableCourses() {
		List<CourseDTO> list = enrollService.findAvailableEnrollCourses();
		
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<CourseDTO> enroll(@RequestBody UserEnrollDTO course) {
		CourseDTO courseDTO = userService.enrollUser(course);
		
		return ResponseEntity.ok().body(courseDTO);
	}
}
