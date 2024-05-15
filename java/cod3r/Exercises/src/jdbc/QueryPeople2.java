package jdbc;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class QueryPeople2 {

    public static void main(String[] args) throws SQLException {
        Scanner scanner = new Scanner(System.in);

        Connection connection = ConnectionFactory.getConnection();
        String sql = "SELECT * FROM people WHERE name like ?";

        System.out.print("Enter the query value: ");
        String value = scanner.nextLine();

        PreparedStatement stmt = connection.prepareStatement(sql);
        stmt.setString(1, "%" + value + "%");
        ResultSet result = stmt.executeQuery();

        List<Person> people = new ArrayList<>();

        while (result.next()) {
            int code = result.getInt("code");
            String name = result.getString("name");
            people.add(new Person(code, name));
        }

        for (Person p: people){
            System.out.println(p.getCode() + " ==> " + p.getName());
        }

        stmt.close();
        connection.close();
        scanner.close();
    }
}
