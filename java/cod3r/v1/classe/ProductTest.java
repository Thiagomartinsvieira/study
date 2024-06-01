package classe;

public class ProductTest {
    public static void main(String[] args) {
        Product product1 = new Product();
        product1.name = "Notebook";
        product1.price = 2300;

        Product product2 = new Product("Pen", 4.50);

        Product.discount = 0.5;

        System.out.println(product1.priceWithDiscount());
        System.out.println(product2.priceWithDiscount());
    }
}
