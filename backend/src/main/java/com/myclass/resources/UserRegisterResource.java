package com.myclass.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myclass.dto.UserInsertDTO;
import com.myclass.dto.UserViewDTO;
import com.myclass.services.UserService;


@RestController
@RequestMapping(value = "/register")
public class UserRegisterResource {
	
	@Autowired
	private UserService service;
	
	@PostMapping
	public ResponseEntity<UserViewDTO> insert(@Valid @RequestBody UserInsertDTO dto) {
		UserViewDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}

}
