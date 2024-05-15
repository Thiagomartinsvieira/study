package test.basic;

import model.basic.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ChangeUser1  {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence
                .createEntityManagerFactory("Exercises-jpa");
        EntityManager em = emf.createEntityManager();

        em.getTransaction().begin();

        User user = em.find(User.class, 8L);
        user.setName("Thiago Vieira");
        user.setEmail("thiago_vieira@email.com");

        em.merge(user);

        em.getTransaction().commit();

        em.close();
        emf.close();
    }
}
