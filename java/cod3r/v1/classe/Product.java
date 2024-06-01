package classe;

public class Product {
    String name;
    double price;
    static double discount;

    Product(){

    }

    Product(String name, double price) {
          this.name = name;
          this.price = price;
    }

    double priceWithDiscount(){
        return price - price * discount;
    }
}
