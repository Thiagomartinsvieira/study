package Classe;

public class ProductTest {
    public static void main(String[] args) {

        Product p1 = new Product();
        p1.name = "Notebook";
        p1.price = 3492.32;
        p1.discount = 0.24;

        var p2 = new Product();
        p2.name = "SmartWatch";
        p2.price = 50.32;
        p2.discount = 0.24;

        System.out.println(p1.name);
        System.out.println(p2.name);

        double finalPrice1 = p1.priceWithDiscount();
        double finalPrice2 = p2.priceWithDiscount(0.1);
        double mediaPrice = (finalPrice1 + finalPrice2) / 2;

        System.out.printf("Cart media = R$%.2f.", mediaPrice);

        System.out.println();
    }
}
