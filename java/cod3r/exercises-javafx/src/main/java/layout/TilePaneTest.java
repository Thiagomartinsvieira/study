package layout;

import java.util.ArrayList;
import java.util.List;

import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.layout.TilePane;

public class TilePaneTest extends TilePane {

    public TilePaneTest() {

        List<Square> squares = new ArrayList<>();

        // Create a list of Square objects, each with incrementally larger sizes
        for (int i = 1; i < 10; i++) {
            squares.add(new Square(i * 10));
        }

        // Configure padding around the TilePane
        setPadding(new Insets(20, 10, 20, 10));
        // Set the vertical and horizontal gaps between tiles
        setVgap(10);
        setHgap(10);

        // Set the orientation of the tiles to vertical
        setOrientation(Orientation.VERTICAL);
        // Align the tiles to the bottom right of the TilePane
        setTileAlignment(Pos.BOTTOM_RIGHT);

        // Add all squares to the TilePane's children
        getChildren().addAll(squares);
    }
}
