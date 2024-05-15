package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class ChangePersonName {
    public static void main(String[] args) throws SQLException {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the code of person: ");
        int code = scanner.nextInt();

        String select = "SELECT code, name FROM people where code = ?";
        String update = "UPDATE people SET name = ? WHERE code = ?";

        Connection connection = ConnectionFactory.getConnection();
        PreparedStatement stmt = connection.prepareStatement(select);
        stmt.setInt(1, code);
        ResultSet result = stmt.executeQuery();

        if (result.next()) {
            Person p = new Person(result.getInt(1), result.getString(2));

            System.out.println("The actual name  is " + p.getName());
            scanner.nextLine();

            System.out.println("Enter the new name: ");
            String newName = scanner.nextLine();

            stmt.close();

            stmt = connection.prepareStatement(update);
            stmt.setString(1, newName);
            stmt.setInt(2, code);
            stmt.execute();

            System.out.println("Successfully changed person");
        } else {
            System.out.println("Person not found");
        }

        connection.close();
        scanner.close();
    }
}
