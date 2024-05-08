package br.com.cod3r.mf.model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class Board implements FieldObserver {

    private final int rows;
    private final int columns;
    private final int mines;

    private final List<Field> fields = new ArrayList<>();
    private final List<Consumer<ResultEvent>> observers = new ArrayList<>();

    public Board(int rows, int columns, int mines) {
        this.rows = rows;
        this.columns = columns;
        this.mines = mines;

        generateFields();
        associateNeighbors();
        randomizeMines();
    }

    public void forEachField(Consumer<Field> function) {
        fields.forEach(function);
    }

    public void registerObserver(Consumer<ResultEvent> observer) {
        observers.add(observer);
    }

    private void notifyObservers(boolean result) {
        observers.forEach(observer -> observer.accept(new ResultEvent(result)));
    }

    public void open(int row, int column) {
        fields.parallelStream()
                .filter(f -> f.getRow() == row && f.getColumn() == column)
                .findFirst()
                .ifPresent(Field::open);
    }

    public void toggleMarking(int row, int column) {
        fields.parallelStream()
                .filter(f -> f.getRow() == row && f.getColumn() == column)
                .findFirst()
                .ifPresent(Field::toggleMarking);
    }

    private void generateFields() {
        for (int row = 0; row < rows; row++) {
            for (int column = 0; column < columns; column++) {
                Field field = new Field(row, column);
                field.registerObserver(this);
                fields.add(field);
            }
        }
    }

    private void associateNeighbors() {
        for (Field f1 : fields) {
            for (Field f2 : fields) {
                f1.addNeighbor(f2);
            }
        }
    }

    private void randomizeMines() {
        long armedMines = 0;
        Predicate<Field> mined = Field::isMined;

        do {
            int randomIndex = (int) (Math.random() * fields.size());
            fields.get(randomIndex).mine();
            armedMines = fields.stream().filter(mined).count();
        } while (armedMines < mines);
    }

    public boolean goalAchieved() {
        return fields.stream().allMatch(Field::goalAchieved);
    }

    public void reset() {
        fields.forEach(Field::reset);
        randomizeMines();
    }

    public int getRows() {
        return rows;
    }

    public int getColumns() {
        return columns;
    }

    @Override
    public void eventOccurred(Field field, FieldEvent event) {
        if (event == FieldEvent.EXPLODE) {
            showMines();
            notifyObservers(false);
        } else if (goalAchieved()) {
            notifyObservers(true);
        }
    }

    private void showMines() {
        fields.stream()
                .filter(Field::isMined)
                .filter(f -> !f.isMarked())
                .forEach(f -> f.setOpen(true));
    }
}
