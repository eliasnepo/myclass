package com.myclass.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myclass.dto.LessonDTO;
import com.myclass.dto.LessonInsertDTO;
import com.myclass.services.LessonService;

@RestController
@RequestMapping(value = "/lessons")
public class LessonResource {

	@Autowired
	private LessonService service;
	
	@PreAuthorize("hasAnyRole('ADMIN', 'INSTRUCTOR')")
	@PostMapping
	public ResponseEntity<LessonDTO> insert(@RequestBody LessonInsertDTO dto) {
		LessonDTO lessonDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(lessonDto.getId()).toUri();
		return ResponseEntity.created(uri).body(lessonDto);
	}
}
