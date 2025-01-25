package org.hsbc.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {

    @RequestMapping("/hello")
    @ResponseBody
    public String m1() {
        return "Hello World, welcome to RestCogewmudasdas!";
    }

    @RequestMapping("/names")
    public String[] m2(){
        String [] arr = {"Ravi", "Kiran", "Rajesh", "Rahul"};
        return arr;
    }

    @RequestMapping("/hello/{uname}")
    public String m3(@PathVariable("uname") String uname) {
        return "Hello " + uname + ", welcome to RestCogewmudasdas!";
    }
}
