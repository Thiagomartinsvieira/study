package org.example.javafx1;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import org.example.javafx1.gui.util.Alerts;

public class ViewController {
    @FXML
    private Button btTest;

    @FXML
    private void onMyButtonClick() {
        Alerts.showAlert("Alert Title", "Alert header", "Hello", Alert.AlertType.CONFIRMATION);
    }
}
