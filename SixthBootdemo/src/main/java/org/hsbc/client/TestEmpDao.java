package org.hsbc.client;

import org.hsbc.dao.EmpRepository;
import org.hsbc.entity.Emp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TestEmpDao {

    @Autowired
    EmpRepository empRepository;

    public void testDao(){
        empRepository.findAll().forEach(System.out::println);
        System.out.println(empRepository.count());
        System.out.println(empRepository.findById(1));

        Emp e = new Emp(5,"Bhanu", 24231, "SE");
        empRepository.save(e);
        System.out.println("Record saved");
        empRepository.findAll().forEach(System.out::println);



    }
}
