import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class Field {

    private final int row;
    private final int column;

    private boolean opened = false;
    private boolean mined = false;
    private boolean marked = false;

    private List<Field> neighbors = new ArrayList<>();

    Field(int row, int column) {
        this.row = row;
        this.column = column;
    }

    boolean addNeighbor(Field neighbor) {
        boolean differentRow = row != neighbor.row;
        boolean differentColumn = column != neighbor.column;
        boolean diagonal = differentRow && differentColumn;

        int deltaRow = Math.abs(row - neighbor.row);
        int deltaColumn = Math.abs(column - neighbor.column);
        int overallDelta = deltaColumn + deltaRow;

        if(overallDelta == 1 && !diagonal) {
            neighbors.add(neighbor);
            return true;
        } else if(overallDelta == 2 && diagonal) {
            neighbors.add(neighbor);
            return true;
        } else {
            return false;
        }
    }

    void toggleMarking() {
        if(!opened) {
            marked = !marked;
        }
    }

    boolean open() {

        if(!opened && !marked) {
            opened = true;

            if(mined) {
                throw new ExplosionException();
            }

            if(isNeighborhoodSafe()) {
                neighbors.forEach(v -> v.open());
            }

            return true;
        } else {
            return false;
        }
    }

    boolean isNeighborhoodSafe() {
        return neighbors.stream().noneMatch(v -> v.mined);
    }

    void mine() {
        mined = true;
    }

    public boolean isMined() {
        return mined;
    }

    public boolean isMarked() {
        return marked;
    }

    void setOpened(boolean opened) {
        this.opened = opened;
    }

    public boolean isOpened() {
        return opened;
    }

    public boolean isClosed() {
        return !isOpened();
    }

    public int getRow() {
        return row;
    }

    public int getColumn() {
        return column;
    }

    boolean isGoalAchieved() {
        boolean uncovered = !mined && opened;
        boolean protectedField = mined && marked;
        return uncovered || protectedField;
    }

    long minesInNeighborhood() {
        return neighbors.stream().filter(v -> v.mined).count();
    }

    void reset() {
        opened = false;
        mined = false;
        marked = false;
    }

    public String toString() {
        if(marked) {
            return "x";
        } else if(opened && mined) {
            return "*";
        } else if(opened && minesInNeighborhood() > 0) {
            return Long.toString(minesInNeighborhood());
        } else if(opened) {
            return " ";
        } else {
            return "?";
        }
    }
}