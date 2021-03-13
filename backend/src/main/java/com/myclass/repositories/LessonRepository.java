package com.myclass.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myclass.entities.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Long>{

}
