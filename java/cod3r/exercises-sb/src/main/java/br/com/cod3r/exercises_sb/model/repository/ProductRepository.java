package br.com.cod3r.exercises_sb.model.repository;

import br.com.cod3r.exercises_sb.model.entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductRepository extends CrudRepository<Product, Integer>,
        PagingAndSortingRepository<Product, Integer> {

    public Iterable<Product> findByNameContainingIgnoreCase(String namePart);
}
