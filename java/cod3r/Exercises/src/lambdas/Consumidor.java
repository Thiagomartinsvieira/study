package lambdas;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Consumidor {
    public static void main(String[] args) {

        Consumer<Product> printName =
                p -> System.out.println(p.name + "!!!");

        Product p1 = new Product("Pencil", 12.34, 0.4);
        printName.accept(p1);

        Product p2 = new Product("Pen", 12.34, 0.4);
        Product p3 = new Product("Cup", 19.12, 0.3);
        Product p4 = new Product("Fan", 70.32, 0.2);
        Product p5 = new Product("Pencil", 7.93, 0.19);

        List<Product> products = Arrays.asList(p1, p2, p3, p4, p5);

        products.forEach(printName);
        products.forEach(p -> System.out.println(p.price));
        products.forEach(System.out::println);
    }
}
