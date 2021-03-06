package com.myclass.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.myclass.entities.Course;
import com.myclass.entities.Deliver;
import com.myclass.entities.Lesson;
import com.myclass.entities.User;
import com.myclass.entities.enums.DeliverStatus;

@Repository
public interface DeliverRepository extends JpaRepository<Deliver, Long>{

	@Query("SELECT obj FROM Deliver obj WHERE"
			+ "(obj.user = :user) AND "
			+ "(obj.lesson = :lesson) AND "
			+ "(obj.course = :course) "
			+ "ORDER BY obj.createdAt DESC")
	Deliver findCustomDeliver(User user, Lesson lesson, Course course);
	
	@Query("SELECT obj FROM Deliver obj WHERE"
			+ "(obj.course = :course) AND"
			+ "(obj.status = :status) "
			+ "ORDER BY obj.createdAt DESC")
	Page<Deliver> find(Course course, DeliverStatus status, Pageable pageable);
}
