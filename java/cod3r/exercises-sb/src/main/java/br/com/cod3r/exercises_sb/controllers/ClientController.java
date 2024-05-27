package br.com.cod3r.exercises_sb.controllers;

import br.com.cod3r.exercises_sb.model.entities.Client;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/clients")
public class ClientController {
    @GetMapping(path = "/any")
    public Client getClient(){
        return new Client(28, "Pedro", "123.456.789-00");
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable int id){
        return new Client(id, "Nair", "987.654.342-00");
    }

    @GetMapping
    public Client getClientById2(
            @RequestParam(name = "id", defaultValue = "1") int id){
        return new Client(id, "Batista", "123.123.123-00");
    }
}
