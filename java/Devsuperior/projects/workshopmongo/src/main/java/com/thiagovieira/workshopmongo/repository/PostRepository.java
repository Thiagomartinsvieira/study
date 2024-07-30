package com.thiagovieira.workshopmongo.repository;

import com.thiagovieira.workshopmongo.domain.Post;
import com.thiagovieira.workshopmongo.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {

}