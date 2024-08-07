package model.onetomany;

import model.basic.Product;

import javax.persistence.*;

@Entity
public class ItemOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Order order;

    @ManyToOne
    private Product product;
    @Column(nullable = false)
    private int amout;
    @Column(nullable = false)
    private Double price;

    public ItemOrder(){

    }

    public ItemOrder(Order order, Product product, int amout) {
        this.setOrder(order);
        this.setProduct(product);
        this.setAmout(amout);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;

        if (product != null && this.price == null){
            this.setPrice(product.getPrice());
        }
    }

    public int getAmout() {
        return amout;
    }

    public void setAmout(int amout) {
        this.amout = amout;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
