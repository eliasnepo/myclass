package com.myclass.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
