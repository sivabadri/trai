package com.example.demo.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.model.TicketEntity;

import jakarta.transaction.Transactional;

public interface TicketRepository extends JpaRepository<TicketEntity, Long>{
	@Query(value = "select*from ticket where age=:s or name=:sn",nativeQuery = true)
	public List<TicketEntity> geti(@Param("s")int age,@Param("sn") String name);
	@Query(value = "select * from ticket where age=:4 and name=:guru",nativeQuery = true)
	public List<TicketEntity> getand(@Param("4")int age,@Param("guru")String name);
	@Query(value = "select * from ticket where name like :g%",nativeQuery = true)
	public List<TicketEntity> getstart(@Param("g")String name);
	@Query(value ="select * from ticket where name like %:gn",nativeQuery = true)
	public List<TicketEntity> getend(@Param("gn") String name);
	@Modifying
	@Transactional
	@Query(value = "update ticket set name=?1 where name=?2",nativeQuery = true)
	public Integer up(@Param("s")String name,@Param("s1") String name1);
	@Modifying
	@Transactional
	@Query(value="delete from ticket where age=:s3",nativeQuery = true)
	public Integer de(@Param("s3")int age);
}
