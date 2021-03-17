package com.myclass.dto;

import java.util.ArrayList;
import java.util.List;

import com.myclass.services.validations.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO {
	private static final long serialVersionUID = 1L;
	
	private String password;
	private List<CourseWithDetailsDTO> courses = new ArrayList<>();
	
	public UserInsertDTO() {
		super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<CourseWithDetailsDTO> getCourses() {
		return courses;
	}

	public void setCourses(List<CourseWithDetailsDTO> courses) {
		this.courses = courses;
	}
}
