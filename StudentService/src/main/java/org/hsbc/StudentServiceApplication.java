package org.hsbc;

import org.hsbc.resource.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class StudentServiceApplication {

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(StudentServiceApplication.class, args);
    }

}
