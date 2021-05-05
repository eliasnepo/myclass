package com.myclass.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.myclass.entities.Course;
import com.myclass.entities.User;

public interface CourseRepository extends JpaRepository<Course, Long>{

	@Query("SELECT obj FROM Course obj INNER JOIN obj.users urs WHERE :user IN urs")
	Page<Course> find(User user, Pageable pageable);
}
