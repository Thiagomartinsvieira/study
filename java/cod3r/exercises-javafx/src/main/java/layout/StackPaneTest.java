package layout;

import javafx.application.Platform;
import javafx.scene.layout.StackPane;

public class StackPaneTest extends StackPane {

    public StackPaneTest() {

        Box b1 = new Box().withText("1");
        Box b2 = new Box().withText("2");
        Box b3 = new Box().withText("3");
        Box b4 = new Box().withText("4");
        Box b5 = new Box().withText("5");
        Box b6 = new Box().withText("6");

        // Adding boxes to the stack pane in a specific order
        getChildren().addAll(b2, b3, b4, b5, b6, b1);

        // Clicking on the right half of the scene will bring the bottom-most component to the front
        // Clicking on the left half will push the top-most component to the back
        setOnMouseClicked(e -> {
            if (e.getSceneX() > getScene().getWidth() / 2) {
                getChildren().get(0).toFront();
            } else {
                getChildren().get(5).toBack();
            }
        });

        // Creates a new thread that brings the bottom-most component to the front every 3 seconds
        Thread t = new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(3000);

                    Platform.runLater(() -> {
                        getChildren().get(0).toFront();
                    });
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt(); // Propagate interrupt
                }
            }
        });

        t.setDaemon(true); // Sets the thread as a daemon so it does not prevent the application from exiting
        t.start();
    }
}
