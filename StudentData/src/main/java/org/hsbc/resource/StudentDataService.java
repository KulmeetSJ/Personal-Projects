package org.hsbc.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/studentData")
public class StudentDataService {

        @RequestMapping("/studentList")
        public List<String> fetchStudentList() {
            return Arrays.asList("aaa", "bbb", "ccc");
        }
}
