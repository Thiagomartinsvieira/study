package org.example.exercisesjavafx.fxml;

import java.net.URL;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class AppFXML extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        // Load the css file
        URL cssFileUrl = getClass().getResource("/fxml/Login.css");
        if (cssFileUrl == null) {
            throw new RuntimeException("Cannot find Login.css");
        }
        String cssFile = cssFileUrl.toExternalForm();

        // Load fxml file
        URL fxmlFileUrl = getClass().getResource("/fxml/Login.fxml");
        if (fxmlFileUrl == null) {
            throw new RuntimeException("Cannot find Login.fxml");
        }

        GridPane root = FXMLLoader.load(fxmlFileUrl);

        Scene scene = new Scene(root, 300, 300);
        scene.getStylesheets().add(cssFile);

        primaryStage.setResizable(false);
        primaryStage.setTitle("Login Screen");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
