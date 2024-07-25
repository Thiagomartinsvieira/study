package com.thiagovieira.workshopmongo.resources;

import com.thiagovieira.workshopmongo.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<User>> findAll() {
        User thiago = new User("1", "Thiago Martins", "thiago@email.com");
        User sisleide = new User("2", "Sisleide Costa", "sisleide@email.com");
        List<User> list = new ArrayList<>();
        list.addAll(Arrays.asList(thiago, sisleide));
        return ResponseEntity.ok().body(list);
    }
}
