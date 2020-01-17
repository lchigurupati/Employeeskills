package com.example.skills.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "EmployeeCollection") // This is the collection name created in the mongodb
public class EmployeeSkillSet {
	@Id
	private String empId;
	
	private String LastName;
	private String FirstName;
	private String Grade;	
	private String skills;
	
	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		this.LastName = lastName;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		this.FirstName = firstName;
	}

	public String getGrade() {
		return Grade;
	}

	public void setGrade(String grade) {
		this.Grade = grade;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getEmpId() {
		return empId;
	}
	
}
