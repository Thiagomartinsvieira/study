package oo.composition;

import java.util.ArrayList;

public class Purchase {

    String client;
    ArrayList<Item> items = new ArrayList<>();

    void addItem(String name, int amount, double price){
        this.addItem(new Item(name, amount, price));
    }

    void addItem(Item item){
        this.items.add(item);
        item.purchase = this;
    }

    double getTotalValue(){
        double total = 0;

        for (Item item: items){
            total += item.amount * item.price;
        }

        return total;
    }
}
