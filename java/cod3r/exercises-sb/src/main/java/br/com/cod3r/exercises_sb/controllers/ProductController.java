package br.com.cod3r.exercises_sb.controllers;

import br.com.cod3r.exercises_sb.model.entities.Product;
import br.com.cod3r.exercises_sb.model.repository.ProductRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @PostMapping
        public @ResponseBody Product newProduct(@Valid Product product) {
           productRepository.save(product);
           return product;
        }

    @GetMapping
    public Iterable<Product> getProducts(){
        return productRepository.findAll();
    }

    @GetMapping(path = ("/name/{namePart}"))
    public Iterable<Product> getProductsByName(@PathVariable String namePart){
        return productRepository.findByNameContainingIgnoreCase(namePart);
    }

    @GetMapping(path = "/page/{pageNumber}")
    public Iterable<Product> getProductsByPage(
            @PathVariable int pageNumber) {
        Pageable page = PageRequest.of(pageNumber, 3);
        return productRepository.findAll(page);
    }

    @GetMapping(path = "/{id}")
    public Optional<Product> getProductById(@PathVariable  int id){
        return productRepository.findById(id);
    }
    @PutMapping
    public Product changeProduct(@Valid Product product){
        productRepository.save(product);
        return product;
    }

    @DeleteMapping(path = "/{id}")
    public void removeProduct(@PathVariable int id){
        productRepository.deleteById(id);
    }
}
