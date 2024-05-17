package test.basic;

import infra.DAO;
import model.basic.Product;

public class NewProduct {

    public static void main(String[] args) {

        Product product = new Product("Pencil", 15.25);

        DAO<Product> dao = new DAO<>(Product.class);
        dao.includeAtomic(product).close();

        System.out.println("Product id: " + product.getId());
    }
}
