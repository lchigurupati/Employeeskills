package com.example.skills.repository;

import com.example.skills.model.EmployeeSkillSet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeesSkillSetRepository extends MongoRepository<EmployeeSkillSet, String> {

}
