package com.myclass.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.myclass.entities.Course;
import com.myclass.entities.Lesson;

public class CourseWithDetailsDTO extends CourseDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private List<LessonDTO> lessons = new ArrayList<>();
	
	public CourseWithDetailsDTO() {
		super();
	}

	public CourseWithDetailsDTO(Course entity, Set<Lesson> lessons) {
		super(entity);
		lessons.forEach(lesson -> this.lessons.add(new LessonDTO(lesson)));
	}

	public List<LessonDTO> getLessons() {
		return lessons;
	}

	public void setLessons(List<LessonDTO> lessons) {
		this.lessons = lessons;
	}
}
