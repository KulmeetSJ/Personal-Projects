package org.hsbc.controller;


import org.hsbc.model.Course;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    List<Course> courses;

    public CourseController() {
       courses = Arrays.asList(
                new Course(101, "Java", "Ravi", 30),
                new Course(102, "Spring", "Kiran", 40),
                new Course(103, "Hibernate", "Rajesh", 50),
                new Course(104, "Angular", "Rahul", 60)
         );
    }

    @RequestMapping("/{cid}")
    public Course getCourseById(@PathVariable("cid") int cid) {
        return courses.stream().filter(course -> course.getId() == cid).findFirst().get();
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courses;
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        courses.add(course);
        return course;
    }

    @DeleteMapping("/courses/{cid}")
    public Course deleteCourse(@PathVariable("cid") int cid) {
        Course course = courses.stream().filter(c -> c.getId() == cid).findFirst().get();
        courses.remove(course);
        return course;
    }

    @GetMapping("/courses/{cid}")
    public Course getCourseById1(@PathVariable("cid") int cid) {
        return courses.stream().filter(course -> course.getId() == cid).findFirst().get();
    }


}
