package com.myclass.dto;

import com.myclass.entities.User;

public class UserInfoDTO {

	private Long id;
	private String name;
	private String university;
	private int courseCount;
	
	public UserInfoDTO() {
		
	}

	public UserInfoDTO(Long id, String name, String university, int courseCount) {
		super();
		this.id = id;
		this.name = name;
		this.university = university;
		this.courseCount = courseCount;
	}
	
	public UserInfoDTO(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.university = user.getUniversity();
		this.courseCount = user.getCourses().size();
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

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public int getCourseCount() {
		return courseCount;
	}

	public void setCourseCount(int courseCount) {
		this.courseCount = courseCount;
	}
	
}
