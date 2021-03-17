package com.myclass.dto;

import java.io.Serializable;
import java.time.Instant;

import com.myclass.entities.Course;

public class CourseDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String description;
	private String imgUri;
	private Instant createdAt;
	
	public CourseDTO() {
	}
	
	public CourseDTO(Long id, String name, String description, String imgUri, Instant createdAt) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.imgUri = imgUri;
		this.createdAt = createdAt;
	}

	public CourseDTO(Course entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
		this.imgUri = entity.getImgUri();
		this.createdAt = entity.getCreatedAt();
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUri() {
		return imgUri;
	}

	public void setImgUri(String imgUri) {
		this.imgUri = imgUri;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}
}
