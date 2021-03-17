package com.myclass.dto;

import java.io.Serializable;

import com.myclass.entities.Lesson;

public class LessonDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String subtitle;
	// private CourseViewDTO course;
	
	public LessonDTO() {
	}

	public LessonDTO(Long id, String title, String subtitle, CourseDTO course) {
		super();
		this.id = id;
		this.title = title;
		this.subtitle = subtitle;
		// this.course = course;
	}
	
	public LessonDTO(Lesson entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.subtitle = entity.getSubtitle();
		// this.course = new CourseViewDTO(entity.getCourse());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	/*public CourseViewDTO getCourse() {
		return course;
	}

	public void setCourse(CourseViewDTO course) {
		this.course = course;
	}*/
}
