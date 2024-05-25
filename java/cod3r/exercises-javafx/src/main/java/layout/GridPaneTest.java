package layout;

import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.RowConstraints;

public class GridPaneTest extends GridPane {

    public GridPaneTest() {

        Box b1 = new Box().withText("1");
        Box b2 = new Box().withText("2");
        Box b3 = new Box().withText("3");
        Box b4 = new Box().withText("4");
        Box b5 = new Box().withText("5");
        Box b6 = new Box().withText("6");

        setGridLinesVisible(true); // Makes the grid lines visible for debugging

        // Add column constraints
        getColumnConstraints().addAll(standardCC(), standardCC(), fixedCC(), standardAll(), standardCC());
        // Add row constraints
        getRowConstraints().addAll(standardRC(), standardRC(), fixedRC(), standardRC(), standardRC());

        setVgap(10); // Sets the vertical gap between cells
        setHgap(10); // Sets the horizontal gap between cells

        // Place boxes within the grid
        add(b1, 0, 0, 2, 2);
        add(b2, 1, 1, 2, 2);
        add(b3, 4, 2, 1, 3);
        add(b4, 3, 1);
        add(b5, 0, 4, 2, 1);
        add(b6, 3, 3);
    }

    private ColumnConstraints standardAll() {
        return null;
    }

    private ColumnConstraints standardCC() {
        ColumnConstraints cc = new ColumnConstraints();
        cc.setPercentWidth(20); // Sets the width of the column as a percentage
        cc.setFillWidth(true); // The component in the column can resize width to fill the space
        return cc;
    }

    private ColumnConstraints fixedCC() {
        ColumnConstraints cc = new ColumnConstraints();
        cc.setMinWidth(50);
        cc.setMaxWidth(50); // Fixes the width of the column
        cc.setFillWidth(true);
        return cc;
    }

    private RowConstraints standardRC() {
        RowConstraints rc = new RowConstraints();
        rc.setPercentHeight(20); // Sets the height of the row as a percentage
        rc.setFillHeight(true); // The component in the row can resize height to fill the space
        return rc;
    }

    private RowConstraints fixedRC() {
        RowConstraints rc = new RowConstraints();
        rc.setMinHeight(20);
        rc.setMaxHeight(20); // Fixes the height of the row
        rc.setFillHeight(true);
        return rc;
    }
}
