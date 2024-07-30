package com.thiagovieira.workshopmongo.config;

import com.thiagovieira.workshopmongo.domain.Post;
import com.thiagovieira.workshopmongo.domain.User;
import com.thiagovieira.workshopmongo.dto.AuthorDTO;
import com.thiagovieira.workshopmongo.dto.CommentDTO;
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

        User maria = new User(null, "Maria Brown", "maria@email.com");
        User thiago = new User(null, "Thiago Vieira", "alex@email.com");
        User dayane = new User(null, "Dayane Valerio", "dayane@email.com");

        userRepository.saveAll(Arrays.asList(maria, thiago, dayane));

        Post post1 = new Post(null, sdf.parse("21/03/2022"), "The Journey has Started!", "I am going to travel to São Paulo. Hugs!", new AuthorDTO(dayane));
        Post post2 = new Post(null, sdf.parse("23/03/2023"), "Good Morning!", "Today i woke up happy!", new AuthorDTO(dayane));

        CommentDTO c1 = new CommentDTO("Have a Good trip, Bro!", sdf.parse("21/03/2023"), new AuthorDTO(thiago));
        CommentDTO c2 = new CommentDTO("Enjoy", sdf.parse("27/10/2004"), new AuthorDTO(maria));
        CommentDTO c3 = new CommentDTO("Have a nice day!", sdf.parse("27/10/2004"), new AuthorDTO(dayane));

        post1.getComments().addAll(Arrays.asList(c1, c2));
        post2.getComments().addAll(Arrays.asList(c3));

        postRepository.saveAll(Arrays.asList(post1, post2));

        dayane.getPosts().addAll(Arrays.asList(post1, post2));
        userRepository.save(dayane);
    }
}
