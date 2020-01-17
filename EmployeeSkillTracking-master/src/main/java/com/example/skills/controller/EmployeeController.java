package com.example.skills.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.skills.EmployeesSkillsApiApplication;
import com.example.skills.model.EmployeeSkillSet;
import com.example.skills.repository.EmployeesSkillSetRepository;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@CrossOrigin(origins="*")
public class EmployeeController {
	
	@Autowired
	private EmployeesSkillSetRepository repository;
	
	@RequestMapping(method = RequestMethod.POST,value="/employee") //add an employee record
	
	public String addEmployee(@RequestBody EmployeeSkillSet employees) {		
		System.out.println("Inside addEmployee");
		repository.save(employees);
		return "Data Added";
	}
	
	@RequestMapping("/getAll") //get all employee records
	
	public List<EmployeeSkillSet> getAllEmployees() {		
		System.out.println("Inside getAllEmployees");
		return repository.findAll();
	}
	
	@RequestMapping("/get/{id}") //get an employee record based on ID
	
	public Optional<EmployeeSkillSet>getOneEmployee(@PathVariable String id) {		
		System.out.println("Inside getOneEmployee");
		return repository.findById(id);
	}
	
	@RequestMapping("/delete/{id}") //delete an employee record based on ID
	
	public String deleteEmployee(@PathVariable String id) {		
		System.out.println("Inside deleteEmployee");
		repository.deleteById(id);
		return "Employee Deleted with ID:"+id;
	}
	
}
