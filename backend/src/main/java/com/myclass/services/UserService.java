package com.myclass.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.dto.CourseDTO;
import com.myclass.dto.CourseWithDetailsDTO;
import com.myclass.dto.RoleDTO;
import com.myclass.dto.UserDTO;
import com.myclass.dto.UserEnrollDTO;
import com.myclass.dto.UserInfoDTO;
import com.myclass.dto.UserInsertDTO;
import com.myclass.entities.Course;
import com.myclass.entities.Role;
import com.myclass.entities.User;
import com.myclass.repositories.CourseRepository;
import com.myclass.repositories.RoleRepository;
import com.myclass.repositories.UserRepository;


@Service
public class UserService implements UserDetailsService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		return new UserDTO(entity, entity.getRoles());
	}
	
	public UserInfoDTO loadUserInfo() {
		User user = authService.authenticated();
		return new UserInfoDTO(user);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("Usu??rio n??o encontrado: " + username);
			throw new UsernameNotFoundException("Email n??o encontrado");
		}
		logger.info("Usu??rio encontrado: " + username);
		return user;
	}
	
	@Transactional
	public CourseDTO enrollUser(UserEnrollDTO dto) {
		User user = authService.authenticated();
		Course course = courseRepository.getOne(dto.getCourse().getId());
		
		user.getCourses().add(course);
		
		repository.save(user);
		
		return new CourseDTO(course);
	}
	
	private void copyDtoToEntity(UserInsertDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setUniversity(dto.getUniversity());
		
		entity.getCourses().clear();
		for (CourseWithDetailsDTO courseDto : dto.getCourses()) {
			Course course = courseRepository.getOne(courseDto.getId());
			entity.getCourses().add(course);
		}
		
		entity.getRoles().clear();
		for (RoleDTO roleDto : dto.getRoles()) {
			Role role = roleRepository.getOne(roleDto.getId());
			entity.getRoles().add(role);
		}
	}
}
