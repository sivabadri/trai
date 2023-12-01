package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.TicketEntity;
import com.example.demo.service.TicketService;

@RestController
@CrossOrigin
public class TicketController {
@Autowired
TicketService sser;
@PostMapping("post")
public TicketEntity disp(@RequestBody TicketEntity ss)
{
	return sser.saveinfo(ss);
}

@GetMapping("get")
public List<TicketEntity> dis()
{
	return sser.showinfo();
}
@GetMapping("get12/{phone_no}")
public Optional<TicketEntity> getid(@PathVariable Long phone_no)
{
	return sser.getbyid(phone_no);
}
@PutMapping("put")
public TicketEntity update(@RequestBody TicketEntity ss)
{
	return sser.updateinfo(ss);
}
@PutMapping("put/{phone_no}")
public String updateby(@PathVariable Long phone_no,@RequestBody TicketEntity ss)
{
	return sser.updatebyid(phone_no,ss);
}
@DeleteMapping("delete/{phone_no}")
public String delete(@PathVariable Long phone_no)
{
	return sser.deleteat(phone_no);
}
@GetMapping("getasc/{name}")
public List<TicketEntity> sorta(@PathVariable String name)
{
	return sser.sortasc(name);
}
@GetMapping("sortandpage/{pgno}/{pgsize}")
public List<TicketEntity>sortpage(@PathVariable int pgno,@PathVariable int pgsize){
	return sser.getbypage(pgno,pgsize);
}
@GetMapping("getdesc/{name}")
public List<TicketEntity> sortd(@PathVariable String name)
{
	return sser.sortdesc(name);
}
//select or
	@GetMapping("/getn/{age}/{name}")
	public List<TicketEntity> gtn(@PathVariable int age,@PathVariable String name)
	{
		return sser.gt(age, name);
	}
	//select and
	@GetMapping("/getand/{age}/{name}")
	public List<TicketEntity> gan(@PathVariable int age,@PathVariable String name)
	{
		return sser.gand(age, name);
	}
//	//select like start
	@GetMapping("getlike/{name}")
	public List<TicketEntity> gli(@PathVariable String name)
	{
		return sser.gstart(name);
	}
//	//select like end
	@GetMapping("getend/{name}")
	public List<TicketEntity> gen(@PathVariable String name)
	{
		return sser.gend(name);
	}
	//update
	@PutMapping("update/{name}/{id}")
	public Integer ut(@PathVariable String name,@PathVariable String id)
	{
		return sser.updat(name,id);
	}
	//delete
	@DeleteMapping("del/{age}")
	public Integer de(@PathVariable int age)
	{
		return sser.del(age);
	}
}
