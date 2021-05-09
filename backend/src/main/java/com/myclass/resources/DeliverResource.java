package com.myclass.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myclass.dto.DeliverDTO;
import com.myclass.dto.DeliverInsertDTO;
import com.myclass.dto.DeliverRevisionDTO;
import com.myclass.entities.enums.DeliverStatus;
import com.myclass.services.DeliverService;


@RestController
@RequestMapping(value = "/deliveries")
public class DeliverResource {

	@Autowired
	private DeliverService service;
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping
	public ResponseEntity<List<DeliverDTO>> getDeliveries() {
		List<DeliverDTO> dto = service.getDeliveries();
		return ResponseEntity.ok().body(dto);
	}
	
	@GetMapping(value = "/person/gets")
	public ResponseEntity<List<DeliverDTO>> getDeliveriesOfUser() {
		List<DeliverDTO> dto = service.getDeliveriesOfUser();
		return ResponseEntity.ok().body(dto);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN', 'INSTRUCTOR')")
	@GetMapping(value = "/{id}")
	public ResponseEntity<Page<DeliverDTO>> getDeliveriesByCourse(@PathVariable Long id,
			@RequestParam(value = "status", defaultValue = "PENDING") DeliverStatus status,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "12") Integer size) {
		
		PageRequest pageRequest = PageRequest.of(page, size);
		
		Page<DeliverDTO> dto = service.getDeliveriesByCourse(id, status, pageRequest);
		return ResponseEntity.ok().body(dto);
	}
	
	@PreAuthorize("hasAnyRole('STUDENT')")
	@PostMapping
	public ResponseEntity<DeliverDTO> insert(@RequestBody DeliverInsertDTO dto) {
		DeliverDTO viewDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(viewDto.getId()).toUri();
		return ResponseEntity.created(uri).body(viewDto);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN', 'INSTRUCTOR')")
	@PutMapping(value = "/{id}")
	public ResponseEntity<Void> saveRevision(@PathVariable Long id, @RequestBody DeliverRevisionDTO dto) {
		service.saveRevision(id, dto);
		return ResponseEntity.noContent().build();
	}
	
	
}
