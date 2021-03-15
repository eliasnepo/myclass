package com.myclass.dto;

import java.io.Serializable;
import java.time.Instant;

import com.myclass.entities.Course;
import com.myclass.entities.Deliver;
import com.myclass.entities.Lesson;
import com.myclass.entities.User;
import com.myclass.entities.enums.DeliverStatus;

public class DeliverDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String uri;
	private Instant createdAt;
	private DeliverStatus status;
	private String feedback;
	private Lesson task;
	private User user;
	private Course course;
	
	public DeliverDTO() {
	}

	public DeliverDTO(Long id, String uri, Instant createdAt, DeliverStatus status, String feedback, Lesson task,
			User user, Course course) {
		super();
		this.id = id;
		this.uri = uri;
		this.createdAt = createdAt;
		this.status = status;
		this.feedback = feedback;
		this.task = task;
		this.user = user;
		this.course = course;
	}
	
	public DeliverDTO(Deliver entity) {
		super();
		this.id = entity.getId();
		this.uri = entity.getUri();
		this.createdAt = entity.getCreatedAt();
		this.status = entity.getStatus();
		this.feedback = entity.getFeedback();
		this.task = entity.getTask();
		this.user = entity.getUser();
		this.course = entity.getCourse();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public DeliverStatus getStatus() {
		return status;
	}

	public void setStatus(DeliverStatus status) {
		this.status = status;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public Lesson getTask() {
		return task;
	}

	public void setTask(Lesson task) {
		this.task = task;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}
}
