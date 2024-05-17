package infra;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class DAO<E>  {

    private static EntityManagerFactory emf;
    private EntityManager em;
    private Class<E> eClass;
    static {
        try  {
            emf = Persistence.createEntityManagerFactory("Exercises-jpa");
        } catch (Exception e){

        }
    }

    public DAO() {
        this(null);
    }

    public DAO(Class<E> eClass){
        this.eClass = eClass;
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

    public E getPerId(Object id){
        return em.find(eClass, id);
    }

    public List<E> getAll() {
        return this.getAll(10, 0);
    }

    public List<E> getAll(int amount, int displacement ) {
        if (eClass == null){
            throw new UnsupportedOperationException("class null");
        }

        String jpql = "select e from " + eClass.getSimpleName() + " e";
        TypedQuery<E> query = em.createQuery(jpql, eClass);
        query.setMaxResults(amount);
        query.setFirstResult(displacement);
        return query.getResultList();
    }

    public void close() {
        em.close();
    }
}
