package com.myclass.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myclass.dto.DeliverDTO;
import com.myclass.dto.DeliverRevisionDTO;
import com.myclass.dto.DeliverViewDTO;
import com.myclass.services.DeliverService;


@RestController
@RequestMapping(value = "/deliveries")
public class DeliverResource {

	@Autowired
	private DeliverService service;
	
	@PreAuthorize("hasAnyRole('ADMIN', 'INSTRUCTOR')")
	@GetMapping
	public ResponseEntity<List<DeliverViewDTO>> getDeliveries() {
		List<DeliverViewDTO> dto = service.getDeliveries();
		return ResponseEntity.ok().body(dto);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN', 'INSTRUCTOR')")
	@GetMapping(value = "/{id}")
	public ResponseEntity<List<DeliverViewDTO>> getDeliveriesByCourse(@PathVariable Long id) {
		List<DeliverViewDTO> dto = service.getDeliveriesByCourse(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<DeliverViewDTO> insert(@RequestBody DeliverDTO dto) {
		DeliverViewDTO viewDto = service.insert(dto);
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
