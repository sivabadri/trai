package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.LoginEntity;
import com.example.demo.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
    LoginService sser;
	@PostMapping("post1")
	public LoginEntity  post1info(@RequestBody LoginEntity ss)
	{
		return sser.saveinfo(ss);
	}
	@GetMapping("get1")
	public List<LoginEntity> get1info()
	{
		return sser.showinfo();
	}
//	@PutMapping("update1/{mailid}")
//	public String uo(@PathVariable String mailid,@RequestBody LoginEntity ss)
//	{
//		return sser.update(mailid, ss);
//	}
	@DeleteMapping("delete1/{mailid}")
	public String deleteinf(@PathVariable String mailid)
	{
		return sser.deleteinfo(mailid);
	}

}
