package br.com.vieira.controllers;

import br.com.vieira.data.vo.v1.PersonVO;
import br.com.vieira.data.vo.v2.PersonVOV2;
import br.com.vieira.services.PersonServices;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/person/v1")
public class PersonController {

    @Autowired
    private PersonServices service;

    @GetMapping
    public List<PersonVO> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public PersonVO findById(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @PostMapping
    public PersonVO create(@RequestBody PersonVO person) {
        return service.create(person);
    }

    @PostMapping("/v2")
    public PersonVOV2 createV2(@RequestBody PersonVOV2 person) {
        return service.createV2(person);
    }

    @PutMapping
    public PersonVO update(@RequestBody PersonVO person) {
        return service.update(person);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

}