package com.myclass.dto;

import java.io.Serializable;

import com.myclass.entities.User;

public class UserViewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;

	public UserViewDTO() {
	}

	public UserViewDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public UserViewDTO(User user) {
		id = user.getId();
		name = user.getName();
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
	
	
}
