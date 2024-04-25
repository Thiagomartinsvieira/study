package Classe;

public class ProductTest {
    public static void main(String[] args) {

        Product p1 = new Product("Notebook", 3492.32);

        var p2 = new Product();
        p2.name = "SmartWatch2";
        p2.price = 50.32;

        Product.discount = 0.50;

        System.out.println(p1.name + " " + p1.priceWithDiscount());
        System.out.println(p2.name + " " + p2.priceWithDiscount());

        double finalPrice1 = p1.priceWithDiscount();
        double finalPrice2 = p2.priceWithDiscount(0.1);
        double mediaPrice = (finalPrice1 + finalPrice2) / 2;

        System.out.printf("Cart media = R$%.2f.", mediaPrice);

        System.out.println();
    }
}
