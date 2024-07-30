package com.thiagovieira.workshopmongo.config;

import com.thiagovieira.workshopmongo.domain.Post;
import com.thiagovieira.workshopmongo.domain.User;
import com.thiagovieira.workshopmongo.repository.PostRepository;
import com.thiagovieira.workshopmongo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.TimeZone;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Override
    public void run(String... args) throws Exception {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyy");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));

        userRepository.deleteAll();
        postRepository.deleteAll();

        User maria = new User(null, "Maria Brown", "maria@gmail.com");
        User alex = new User(null, "Alex Green", "alex@gmail.com");
        User dayane = new User(null, "Dayane Valerio", "dayane@gmail.com");

        Post post1 = new Post(null, sdf.parse("21/03/2022"), "The Journey has Started!", "I am going to travel to São Paulo. Hugs!", dayane);
        Post post2 = new Post(null, sdf.parse("23/03/2023"), "Good Morning!", "Today i woke up happy!", dayane);

        userRepository.saveAll(Arrays.asList(maria, alex, dayane));
        postRepository.saveAll(Arrays.asList(post1, post2));
    }
}
