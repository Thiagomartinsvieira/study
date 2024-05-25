package layout;

import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.layout.FlowPane;

public class FlowPaneTest extends FlowPane {

    public FlowPaneTest() {
        Square s1 = new Square();
        Square s2 = new Square();
        Square s3 = new Square();
        Square s4 = new Square();
        Square s5 = new Square();

        setHgap(10); // Horizontal gap between elements
        setVgap(10); // Vertical gap between elements
        setPadding(new Insets(10)); // Padding around the edges of the FlowPane

        setOrientation(Orientation.VERTICAL); // Sets the orientation of elements to vertical
        setAlignment(Pos.CENTER_RIGHT); // Aligns elements to the center-right within the FlowPane

        getChildren().addAll(s1, s2, s3, s4, s5); // Adds the squares to the pane
    }
}
