package oo.composition.challenge;
public class ClientTest {
    public static void main(String[] args) {

        Purchase purchase1 = new Purchase();
        purchase1.addItem("Pen", 7.54, 100);
        purchase1.addItem("Notebook", 3275.83, 2);

        Purchase purchase2 = new Purchase();
        purchase2.addItem("Book", 20, 4);
        purchase2.addItem("Printer", 1100.23, 1);

        Client client = new Client("Maria julia Moraes");
        client.addPurchase(purchase1);
        client.purchases.add(purchase2);

        System.out.println(client.getTotalValue()) ;
    }
}
