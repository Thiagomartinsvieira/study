package org.example.exercisesjavafx.fxml;

import org.controlsfx.control.Notifications;

import javafx.fxml.FXML;
import javafx.geometry.Pos;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

public class LoginController {

    @FXML
    private TextField emailField;

    @FXML
    private PasswordField passwordField;

    public void login() {
        boolean isEmailValid = emailField.getText().equals("thiago@email.com");
        boolean isPasswordValid = passwordField.getText().equals("12345678");

        if (isEmailValid && isPasswordValid) {
            Notifications.create()
                    .position(Pos.TOP_RIGHT)
                    .title("FXML Login")
                    .text("Login successful!")
                    .showInformation();
        } else {
            Notifications.create()
                    .position(Pos.TOP_RIGHT)
                    .title("FXML Login")
                    .text("Invalid username or password!")
                    .showError();
        }
    }
}
