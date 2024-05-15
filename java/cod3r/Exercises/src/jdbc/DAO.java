package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DAO {

    private Connection connection;

    public int iclude(String sql, Object... attributes) {
        try {
            PreparedStatement stmt = getConnection().prepareStatement(
                    sql, PreparedStatement.RETURN_GENERATED_KEYS);
            addAtrubutes(stmt, attributes);

            if (stmt.executeUpdate() > 0) {
                ResultSet result = stmt.getGeneratedKeys();

                if (result.next()) {
                    return result.getInt(1);
                }
            }

            return -1;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void close() {
        try {
            getConnection().close();
        } catch (SQLException e) {

        } finally {
            connection = null;
        }
    }

    private void addAtrubutes(PreparedStatement stmt,
                              Object[] attributes) throws SQLException {
        int indice = 1;
        for (Object attibute: attributes) {
            if (attibute instanceof String){
                stmt.setString(indice, (String) attibute);
            } else if (attibute instanceof Integer) {
                stmt.setInt(indice, (Integer) attibute);
            }
            indice++;
        }
    }

    private Connection getConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                return connection;
            }
        } catch (SQLException e) {

        }

        connection = ConnectionFactory.getConnection();
        return connection;
    }
}
