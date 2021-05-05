package com.myclass.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myclass.dto.UserInfoDTO;
import com.myclass.services.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserResource {
	
	@Autowired
	private UserService service;

	@GetMapping
	public ResponseEntity<UserInfoDTO> getUserInfo() {
		UserInfoDTO userInfo = service.loadUserInfo();
		return ResponseEntity.ok().body(userInfo);
	}
}
