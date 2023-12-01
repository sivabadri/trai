package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.demo.model.TicketEntity;
import com.example.demo.model.repository.TicketRepository;

@Service
public class TicketService {
@Autowired
TicketRepository sr;
public TicketEntity saveinfo(TicketEntity ss)
{
	return sr.save(ss);
}
public List<TicketEntity> showinfo()
{
	return sr.findAll();
}
public Optional<TicketEntity> getbyid(Long phone_no)
{
	return sr.findById(phone_no);
}
public TicketEntity updateinfo(TicketEntity ss)
{
	return sr.saveAndFlush(ss);
}
public String updatebyid(Long phone_no,TicketEntity ss)
{
	sr.saveAndFlush(ss);
	 if(sr.existsById(phone_no))
	 {
		 return "valid number";
	 }
	 else
	 {
		 return "please enter the valid number";
	 }
}
public String deleteat(Long phone_no)
{
	if(sr.existsById(phone_no))
	{
		sr.deleteById(phone_no);
		return "valid number";
		
	}
	else
	{
		return "Invalid number";
	}
}
public List<TicketEntity> sortasc(String name)
{
	return sr.findAll(Sort.by(Sort.Direction.ASC,name));
}
public List<TicketEntity> sortdesc(String name)
{
	return sr.findAll(Sort.by(Sort.Direction.DESC,name));
}
public List<TicketEntity> getbypage(int pgno,int pgsize){
	Page<TicketEntity> p=sr.findAll(PageRequest.of(pgno, pgsize));
	return p.getContent();
}
//select for or statement
public List<TicketEntity> gt(int age,String name)
{
	return sr.geti(age, name);
}
//select for and statement
public List<TicketEntity> gand(int age,String name)
{
	return sr.getand(age, name);
}
//select for like start
public List<TicketEntity> gstart(String name)
{
	return sr.getstart(name);
}
//select for like end
public List<TicketEntity> gend(String name)
{
	return sr.getend(name);
}
//update
public Integer updat(String name,String name1)
{
	return sr.up(name,name1);
}
//delete
public Integer del(int id)
{
	return sr.de(id);
}
}
