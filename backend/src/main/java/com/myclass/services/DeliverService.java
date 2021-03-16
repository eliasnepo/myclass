package com.myclass.services;

import java.time.Instant;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myclass.dto.DeliverDTO;
import com.myclass.dto.DeliverRevisionDTO;
import com.myclass.dto.DeliverViewDTO;
import com.myclass.entities.Course;
import com.myclass.entities.Deliver;
import com.myclass.entities.enums.DeliverStatus;
import com.myclass.repositories.CourseRepository;
import com.myclass.repositories.DeliverRepository;


@Service
public class DeliverService {

	@Autowired
	private DeliverRepository repository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public List<DeliverViewDTO> getDeliveries() {
		authService.validateAdmin();
		List<Deliver> list = repository.findAll();
		return list.stream().map(x -> new DeliverViewDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public List<DeliverViewDTO> getDeliveriesByCourse(Long id) {
		Course course = courseRepository.getOne(id);
		Set<Deliver> list = course.getDeliveries();
		return list.stream().map(x -> new DeliverViewDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public DeliverViewDTO insert(DeliverDTO dto) {
		Deliver entity = new Deliver();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new DeliverViewDTO(entity);
	}
	
	@Transactional
	public void saveRevision(Long id, DeliverRevisionDTO dto) {
		Deliver deliver = repository.getOne(id);
		deliver.setStatus(dto.getStatus());
		deliver.setFeedback(dto.getFeedback());
		repository.save(deliver);
	}
	
	private void copyDtoToEntity(DeliverDTO dto, Deliver entity) {
		entity.setUri(dto.getUri());
		entity.setCreatedAt(Instant.now());
		entity.setStatus(DeliverStatus.PENDING);
		entity.setFeedback("");
		entity.setTask(dto.getTask());
		entity.setUser(dto.getUser());
		entity.setCourse(dto.getCourse());
	}

	
}
