package com.myclass.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.entities.User;
import com.myclass.repositories.UserRepository;
import com.myclass.services.exceptions.ForbiddenException;
import com.myclass.services.exceptions.UnauthorizedException;


@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return userRepository.findByEmail(username);
		}
		catch (Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
	
	public void validateSelfOrAdmin(Long userId) {
		User user = authenticated();
		if(!user.getId().equals(userId) && !user.hasRole("ROLE_ADMIN")) {
			throw new ForbiddenException("Access denied");
		}
	}
	
	public void validateAdmin() {
		User user = authenticated();
		if(!user.hasRole("ROLE_ADMIN")) {
			throw new ForbiddenException("Access denied");
		}
	}
}
