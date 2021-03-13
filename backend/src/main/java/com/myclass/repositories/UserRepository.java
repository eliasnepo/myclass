package com.myclass.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
