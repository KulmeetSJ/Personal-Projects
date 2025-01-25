package org.hsbc.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/student")
public class StudentService {

    String baseurl = "http://localhost:8085/studentData/studentList";

    @RequestMapping("/studentList")
    public List fetchStudentList() {

        RestTemplate rt = new RestTemplate();
//        List names = rt.getForEntity(baseurl, List.class).getBody();
        List names = rt.getForObject(baseurl,List.class);
        System.out.println(names);
        return names;
    }


}
