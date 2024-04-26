package oo.composition;

public class TestPurchase {
    public static void main(String[] args) {
        Purchase purchase1 = new Purchase();
        purchase1.client = "Lucas";
        purchase1.addItem("Pen", 10, 5.67);
        purchase1.addItem("rubber", 5,  3.25);
        purchase1.addItem(new Item("Sharpener", 2, 4.50));

        System.out.println(purchase1.items.size());
        System.out.println(purchase1.getTotalValue());

        double total = purchase1.items.get(0).purchase.items.get(1)
                .purchase.getTotalValue();

        System.out.println("The total is " + total);
    }
}
