package test.onetomany;

import infra.DAO;
import model.onetomany.ItemOrder;
import model.onetomany.Order;

public class getOrder {
    public static void main(String[] args) {

        DAO< Order> dao = new DAO<>(Order.class);

        Order order = dao.getPerId(1L);

        for (ItemOrder item: order.getItens()) {
            System.out.println(item.getAmout());
            System.out.println(item.getProduct().getName());
        }
        
        dao.close();
    }
}
