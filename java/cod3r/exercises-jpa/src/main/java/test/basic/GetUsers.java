package test.basic;

import model.basic.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class GetUsers {

    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence
                .createEntityManagerFactory("Exercises-jpa");
        EntityManager em = emf.createEntityManager();

        String jpql = "select u from User u";
        TypedQuery<User> query = em.createQuery(jpql, User.class);
        query.setMaxResults(5);

        List<User> users = query.getResultList();

        for (User user: users) {
            System.out.println("ID: " + user.getId()
            + " Email: " + user.getEmail());
        }

        em.close();;
        emf.close();
    }
}
