package model.onetomany;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "`Oder`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Date date;

    public Order(){
        this(new Date());
    }

    @OneToMany(mappedBy = "order")
    private List<ItemOrder> itens;

    public Order(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<ItemOrder> getItens() {
        return itens;
    }

    public void setItens(List<ItemOrder> itens) {
        this.itens = itens;
    }
}
