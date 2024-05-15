package jdbc;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionFactory {

    public static Connection getConnection() {
        try {
            Properties prop = getProperties();
            final String url = prop.getProperty("database.url");
            final String user = prop.getProperty("database.user");
            final String password = prop.getProperty("database.password");

            return DriverManager.getConnection(url, user, password);
        } catch (SQLException | IOException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }

    private static Properties getProperties() throws IOException {
        Properties prop = new Properties();
        String path = "/connection.properties";

        try (InputStream is = ConnectionFactory.class.getResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Cannot find connection properties file at " + path);
            }
            prop.load(is);
        }

        return prop;
    }
}
