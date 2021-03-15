package com.myclass.dto;

import java.io.Serializable;

import com.myclass.entities.enums.DeliverStatus;


public class DeliverRevisionDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private DeliverStatus status;
	private String feedback;
	
	public DeliverRevisionDTO() {
	}

	public DeliverRevisionDTO(DeliverStatus status, String feedback) {
		super();
		this.status = status;
		this.feedback = feedback;
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
}
