package org.example.javafx1;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import org.example.javafx1.gui.util.Alerts;


import java.util.Locale;

public class ViewController {

    @FXML
    private TextField txtNumber1;

    @FXML
    private TextField txtNumber2;

    @FXML
    private Label labelResult;

    @FXML
    private Button btSum;

    @FXML
    public void onBtSumClick() {
        try {
            Locale.setDefault(Locale.US);
            double height = Double.parseDouble(txtNumber1.getText());
            double width = Double.parseDouble(txtNumber2.getText());
            double sum = height + width;
            labelResult.setText(String.format("%.2f", sum));
        }
        catch (NumberFormatException e) {
            Alerts.showAlert("Error", "Parse error", e.getMessage(), Alert.AlertType.ERROR);
        }
    }
}