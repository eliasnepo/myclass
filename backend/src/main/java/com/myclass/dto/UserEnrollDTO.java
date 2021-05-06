package com.myclass.dto;

import java.io.Serializable;

public class UserEnrollDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private CourseDTO course;

	public UserEnrollDTO() {
		
	}

	public UserEnrollDTO(CourseDTO course) {
		super();
		this.course = course;
	}

	public CourseDTO getCourse() {
		return course;
	}

	public void setCourse(CourseDTO course) {
		this.course = course;
	}
	
}
