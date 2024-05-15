package test.basic;

import model.basic.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class NewUser {

    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence
                .createEntityManagerFactory("Exercises-jpa");
        EntityManager em = emf.createEntityManager();

        User newUser = new User("Thiago", "thiago@email.com");

        em.getTransaction().begin();
        em.persist(newUser);
        em.getTransaction().commit();

        System.out.println("The generate id was: " + newUser.getId());

        em.close();
        emf.close();
    }
}
