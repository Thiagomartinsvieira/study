package infra;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class DAO<E> {

    private static EntityManagerFactory emf;
    private EntityManager em;
    private Class<E> clazz;

    static {
        try {
            emf = Persistence.createEntityManagerFactory("Exercises-jpa");
        } catch (Exception e) {
            // log -> log4j
        }
    }

    public DAO() {
        this(null);
    }

    public DAO(Class<E> clazz) {
        this.clazz = clazz;
        em = emf.createEntityManager();
    }

    public DAO<E> openT() {
        em.getTransaction().begin();
        return this;
    }

    public DAO<E> closeT() {
        em.getTransaction().commit();
        return this;
    }

    public DAO<E> include(E entity) {
        em.persist(entity);
        return this;
    }

    public DAO<E> includeAtomic(E entity) {
        return this.openT().include(entity).closeT();
    }

    public E getById(Object id) {
        return em.find(clazz, id);
    }

    public List<E> getAll() {
        return this.getAll(10, 0);
    }

    public List<E> getAll(int quantity, int offset) {
        if(clazz == null) {
            throw new UnsupportedOperationException("Null class.");
        }

        String jpql = "select e from " + clazz.getName() + " e";
        TypedQuery<E> query = em.createQuery(jpql, clazz);
        query.setMaxResults(quantity);
        query.setFirstResult(offset);
        return query.getResultList();
    }

    public List<E> consult(String queryName, Object... params) {
        TypedQuery<E> query = em.createNamedQuery(queryName, clazz);

        for (int i = 0; i < params.length; i += 2) {
            query.setParameter(params[i].toString(), params[i + 1]);
        }

        return query.getResultList();
    }

    public E consultOne(String queryName, Object... params) {
        List<E> list = consult(queryName, params);
        return list.isEmpty() ? null : list.get(0);
    }

    public void close() {
        em.close();
    }
}
