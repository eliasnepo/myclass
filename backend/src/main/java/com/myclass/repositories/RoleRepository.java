package com.myclass.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}
