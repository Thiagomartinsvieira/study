package jdbc;

public class DAOTest {

    public static void main(String[] args) {

        DAO dao = new DAO();

        String sql = "INSERT INTO people (name, code) VALUES (?, ?)";
        System.out.println( dao.iclude(sql, "João Pedro", 1000));
        System.out.println(dao.iclude(sql, "Mari Fernadez", 1001));
        System.out.println(dao.iclude(sql, "Djalma Dutra", 1002));

        dao.close();
    }
}
