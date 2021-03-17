package com.myclass.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.myclass.entities.Role;
import com.myclass.entities.User;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String email;
	private String university;
	private List<RoleDTO> roles = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(Long id, String name, String email, String university) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.university = university;
	}

	public UserDTO(User user) {
		id = user.getId();
		name = user.getName();
		email = user.getEmail();
		university = user.getUniversity();
	}
	
	public UserDTO(User user, Set<Role> roles) {
		this(user);
		roles.forEach(role -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public List<RoleDTO> getRoles() {
		return roles;
	}

	public void setRoles(List<RoleDTO> roles) {
		this.roles = roles;
	}
}
