package test.basic;

import model.basic.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class RemoveUser {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence
                .createEntityManagerFactory("Exercises-jpa");
        EntityManager em = emf.createEntityManager();

       User user = em.find(User.class, 2L);

       if (user != null) {
           em.getTransaction().begin();
           em.remove(user);
           em.getTransaction().commit();
       }

        em.close();
        emf.close();
    }
}