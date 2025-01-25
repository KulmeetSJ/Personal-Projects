package org.hsbc.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloResource {

    @PreAuthorize(("hasRole('ADMIN')"))
    @RequestMapping("/")
    public String sayHello(){
        return "<h1>Hello World</h1>";
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @RequestMapping("/user")
    public String greetUser(){
        return "<h1>Welcome User</h1>";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping("/admin")
    public String greetAdmin(){
        return "<h1>Welcome Admin</h1>";
    }
}
