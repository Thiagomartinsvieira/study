package test.onetomany;

import infra.DAO;
import model.basic.Product;
import model.onetomany.ItemOrder;
import model.onetomany.Order;

public class NewOrder {
    public static void main(String[] args) {

        DAO<Object> dao = new DAO<>();

        Product product = new Product("Mouse", 56.99);
        Order order = new Order();
        ItemOrder item = new ItemOrder(order, product, 10);

        dao.openT()
                .include(product)
                .include(order)
                .include(item)
                .closeT()
                .close();
    }
}
