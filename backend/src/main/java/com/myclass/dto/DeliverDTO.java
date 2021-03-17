package com.myclass.dto;

import java.io.Serializable;
import java.time.Instant;

import com.myclass.entities.Deliver;
import com.myclass.entities.User;
import com.myclass.entities.enums.DeliverStatus;

public class DeliverDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String uri;
	private Instant createdAt;
	private DeliverStatus status;
	private String feedback;
	private UserDTO user;
	
	public DeliverDTO() {
	}

	public DeliverDTO(Long id, String uri, Instant createdAt, DeliverStatus status, String feedback,
			User user) {
		super();
		this.id = id;
		this.uri = uri;
		this.createdAt = createdAt;
		this.status = status;
		this.feedback = feedback;
		this.user = new UserDTO(user);
	}
	
	public DeliverDTO(Deliver entity) {
		super();
		this.id = entity.getId();
		this.uri = entity.getUri();
		this.createdAt = entity.getCreatedAt();
		this.status = entity.getStatus();
		this.feedback = entity.getFeedback();
		this.user = new UserDTO(entity.getUser());
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

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
