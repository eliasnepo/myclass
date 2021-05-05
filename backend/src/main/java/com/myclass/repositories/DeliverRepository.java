package com.myclass.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.myclass.entities.Course;
import com.myclass.entities.Deliver;
import com.myclass.entities.Lesson;
import com.myclass.entities.User;

@Repository
public interface DeliverRepository extends JpaRepository<Deliver, Long>{

	@Query("SELECT obj FROM Deliver obj WHERE"
			+ "(obj.user = :user) AND "
			+ "(obj.lesson = :lesson) AND "
			+ "(obj.course = :course) "
			+ "ORDER BY obj.createdAt DESC")
	Deliver findCustomDeliver(User user, Lesson lesson, Course course);
}
