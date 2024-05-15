package jdbc;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class CreatePeopleTable {

    public static void main(String[] args) throws SQLException {
        Connection connection = ConnectionFactory.getConnection();

        String sql = "CREATE TABLE IF NOT EXISTS people (" +
                "code INT AUTO_INCREMENT PRIMARY KEY," +
                "name VARCHAR(80) NOT NULL" +
                ")";

        Statement smtm = connection.createStatement();
        smtm.execute(sql);


        System.out.println("Create table with Successfully!");
        connection.close();
    }
}
