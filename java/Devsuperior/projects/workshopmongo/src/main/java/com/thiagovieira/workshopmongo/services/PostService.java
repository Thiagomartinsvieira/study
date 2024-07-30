package com.thiagovieira.workshopmongo.services;

import com.thiagovieira.workshopmongo.domain.Post;
import com.thiagovieira.workshopmongo.domain.User;
import com.thiagovieira.workshopmongo.dto.UserDTO;
import com.thiagovieira.workshopmongo.repository.PostRepository;
import com.thiagovieira.workshopmongo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository repo;

    public Post findById(String id) {
        Optional<Post> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Object not found!"));
    }
}
