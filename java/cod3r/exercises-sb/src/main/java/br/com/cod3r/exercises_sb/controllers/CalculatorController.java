package br.com.cod3r.exercises_sb.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calculator")
public class CalculatorController {

    // Calculator/sum/10/20
    @GetMapping("/sum/{a}/{b}")
    public int sum(@PathVariable int a, @PathVariable int b){
        return a + b;
    }
    // Calculator/subtract?a=100&b=39
    @GetMapping("/subtract")
    public int subtract(
            @RequestParam(name = "a") int a,
            @RequestParam(name = "b") int b){
        return a - b;
    }
}
