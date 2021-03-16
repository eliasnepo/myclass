package com.myclass.dto;

import com.myclass.services.validations.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserViewDTO {
	private static final long serialVersionUID = 1L;
	
	private String password;
	
	public UserInsertDTO() {
		super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
