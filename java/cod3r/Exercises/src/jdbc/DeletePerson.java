package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class DeletePerson {

    public static void main(String[] args) throws SQLException {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the code: ");
        int code = scanner.nextInt();

        Connection connection = ConnectionFactory.getConnection();
        String sql = "DELETE FROM people WHERE code > ?";

        PreparedStatement stmt = connection.prepareStatement(sql);
        stmt.setInt(1, code);

        int counter = stmt.executeUpdate();

        if (counter > 0){
            System.out.println("Person deleted with successfully!");
            System.out.println("Affected rows: " + counter);
        } else {
            System.out.println("Nothing done!");
        }

        connection.close();
        scanner.close();
    }
}
