package oo.composition.challenge;

import java.util.ArrayList;
import java.util.List;

public class Purchase {

    final List<Item> items = new ArrayList<>();

    void addItem(Product p , int amout){
        this.items.add(new Item(p, amout));
    }

    void addItem(String name, double price , int amout){
        var product = new Product(name, price);
        this.items.add(new Item(product, amout));
    }

    double getTotalValue(){
        double total = 0;

        for (Item item: items){
            total += item.amout * item.product.price;
        }

        return total;
    }
}
