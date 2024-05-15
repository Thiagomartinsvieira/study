package test.basic;

import model.basic.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ChangeUser3 {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence
                .createEntityManagerFactory("Exercises-jpa");
        EntityManager em = emf.createEntityManager();

        em.getTransaction().begin();

        User user = em.find(User.class, 8L);
        em.detach(user);

        user.setName("Thiago");

        em.merge(user);

        em.getTransaction().commit();

        em.close();
        emf.close();
    }
}