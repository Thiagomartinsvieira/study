package br.com.cod3r.exercises_sb.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class firstController {

    @GetMapping(path = {"/hello", "/salutation"})
    public String hello(){
        return "hello Spring Boot!";
    }
}