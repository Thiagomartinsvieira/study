package br.com.cod3r.mf.model;

import java.util.ArrayList;
import java.util.List;

public class Field {

    private final int row;
    private final int column;

    private boolean open = false;
    private boolean mined = false;
    private boolean marked = false;

    private List<Field> neighbors = new ArrayList<>();
    private List<FieldObserver> observers = new ArrayList<>();

    Field(int row, int column) {
        this.row = row;
        this.column = column;
    }

    public void registerObserver(FieldObserver observer) {
        observers.add(observer);
    }

    private void notifyObservers(FieldEvent event) {
        observers.forEach(o -> o.eventOccurred(this, event));
    }

    boolean addNeighbor(Field neighbor) {
        boolean differentRow = row != neighbor.row;
        boolean differentColumn = column != neighbor.column;
        boolean diagonal = differentRow && differentColumn;

        int deltaRow = Math.abs(row - neighbor.row);
        int deltaColumn = Math.abs(column - neighbor.column);
        int totalDelta = deltaColumn + deltaRow;

        if (totalDelta == 1 && !diagonal) {
            neighbors.add(neighbor);
            return true;
        } else if (totalDelta == 2 && diagonal) {
            neighbors.add(neighbor);
            return true;
        } else {
            return false;
        }
    }

    public void toggleMarking() {
        if (!open) {
            marked = !marked;

            if (marked) {
                notifyObservers(FieldEvent.MARK);
            } else {
                notifyObservers(FieldEvent.UNMARK);
            }
        }
    }

    public boolean open() {
        if (!open && !marked) {
            if (mined) {
                notifyObservers(FieldEvent.EXPLODE);
                return true;
            }

            setOpen(true);

            if (safeNeighborhood()) {
                neighbors.forEach(n -> n.open());
            }

            return true;
        } else {
            return false;
        }
    }

    public boolean safeNeighborhood() {
        return neighbors.stream().noneMatch(n -> n.mined);
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

    void setOpen(boolean open) {
        this.open = open;

        if (open) {
            notifyObservers(FieldEvent.OPEN);
        }
    }

    public boolean isOpen() {
        return open;
    }

    public boolean isClosed() {
        return !isOpen();
    }

    public int getRow() {
        return row;
    }

    public int getColumn() {
        return column;
    }

    boolean goalAchieved() {
        boolean uncovered = !mined && open;
        boolean protectedField = mined && marked;
        return uncovered || protectedField;
    }

    public int minesInNeighborhood() {
        return (int) neighbors.stream().filter(n -> n.mined).count();
    }

    void reset() {
        open = false;
        mined = false;
        marked = false;
        notifyObservers(FieldEvent.RESET);
    }
}
