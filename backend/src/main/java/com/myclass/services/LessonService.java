package com.myclass.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myclass.dto.LessonDTO;
import com.myclass.dto.LessonInsertDTO;
import com.myclass.entities.Course;
import com.myclass.entities.Lesson;
import com.myclass.repositories.CourseRepository;
import com.myclass.repositories.LessonRepository;

@Service
public class LessonService {

	@Autowired
	private LessonRepository repository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	public LessonDTO insert(LessonInsertDTO dto) {
		Lesson entity = new Lesson();
		copyDtoToEntity(dto, entity);
		repository.save(entity);
		return new LessonDTO(entity);
	}

	private void copyDtoToEntity(LessonInsertDTO dto, Lesson entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubtitle(dto.getSubtitle());
		Course course = courseRepository.getOne(dto.getCourse().getId());
		entity.setCourse(course);
	}
}
