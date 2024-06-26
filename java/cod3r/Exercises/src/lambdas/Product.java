package lambdas;

public class Product {
    final String name;
    final double price;
    final double discount;

    public Product(String name, double price, double discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    public String toString(){
        double finalPrice = price * (1 - discount);
        return "Name: " + name + " has price of $" + finalPrice;
    }
}
