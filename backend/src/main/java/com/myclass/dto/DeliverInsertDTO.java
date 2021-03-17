package com.myclass.dto;

import java.io.Serializable;

public class DeliverInsertDTO extends DeliverDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private LessonDTO task;
	private CourseWithDetailsDTO course;
	
	public DeliverInsertDTO() {
	}

	public DeliverInsertDTO(LessonDTO task, CourseWithDetailsDTO course) {
		super();
		this.task = task;
		this.course = course;
	}

	public LessonDTO getTask() {
		return task;
	}

	public void setTask(LessonDTO task) {
		this.task = task;
	}

	public CourseWithDetailsDTO getCourse() {
		return course;
	}

	public void setCourse(CourseWithDetailsDTO course) {
		this.course = course;
	}
}
