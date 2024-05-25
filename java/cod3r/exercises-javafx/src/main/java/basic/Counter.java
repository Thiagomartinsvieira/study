package basic;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Counter extends Application {

    private int counter = 0; // Variable to keep track of the counter value

    // Method to update the displayed number and its style based on its value
    private void updateNumberLabel(Label label) {
        label.setText(Integer.toString(counter)); // Update the label with the current counter value

        // Remove any existing styles and add new based on the counter value
        label.getStyleClass().remove("green");
        label.getStyleClass().remove("red");

        if(counter > 0) {
            label.getStyleClass().add("green"); // Add green class if positive
        } else if(counter < 0) {
            label.getStyleClass().add("red"); // Add red class if negative
        }
    }

    @Override
    public void start(Stage primaryStage) {

        Label titleLabel = new Label("Counter"); // Title label
        titleLabel.getStyleClass().add("title");

        Label numberLabel = new Label("0"); // Label to display the counter
        numberLabel.getStyleClass().add("number");

        Button decrementButton = new Button("-"); // Decrement button
        decrementButton.getStyleClass().add("buttons");
        decrementButton.setOnAction(e -> {
            counter--;
            updateNumberLabel(numberLabel); // Decrement counter on click
        });

        Button incrementButton = new Button("+"); // Increment button
        incrementButton.getStyleClass().add("buttons");
        incrementButton.setOnAction(e -> {
            counter++;
            updateNumberLabel(numberLabel); // Increment counter on click
        });

        HBox buttonsBox = new HBox(); // Container for buttons
        buttonsBox.setAlignment(Pos.CENTER);
        buttonsBox.setSpacing(10);
        buttonsBox.getChildren().addAll(decrementButton, incrementButton);

        VBox contentBox = new VBox(); // Main container for all components
        contentBox.getStyleClass().add("content");
        contentBox.setSpacing(10);
        contentBox.setAlignment(Pos.CENTER);
        contentBox.getChildren().addAll(titleLabel, numberLabel, buttonsBox);

        // Link to CSS for styling
        String cssPath = getClass().getResource("/basic/Counter.css").toExternalForm();

        Scene mainScene = new Scene(contentBox, 400, 400);
        mainScene.getStylesheets().add(cssPath); // Apply CSS to scene
        mainScene.getStylesheets().add("https://fonts.googleapis.com/css?family=Oswald"); // Google fonts

        primaryStage.setScene(mainScene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
