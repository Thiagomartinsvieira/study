package org.example.javafx1;

import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class ViewController {
    @FXML
    private Button btTest;

    @FXML
    private void onMyButtonClick() {
        System.out.println("Button clicked!");
    }
}
