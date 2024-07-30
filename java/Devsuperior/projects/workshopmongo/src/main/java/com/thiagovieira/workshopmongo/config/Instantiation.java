package com.thiagovieira.workshopmongo.config;

import com.thiagovieira.workshopmongo.domain.User;
import com.thiagovieira.workshopmongo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        userRepository.deleteAll();

        User maria = new User(null, "Maria Brown", "maria@gmail.com");
        User alex = new User(null, "Alex Green", "alex@gmail.com");
        User dayane = new User(null, "Dayane Valerio", "dayane@gmail.com");

        userRepository.saveAll(Arrays.asList(maria, alex, dayane));
    }
}
