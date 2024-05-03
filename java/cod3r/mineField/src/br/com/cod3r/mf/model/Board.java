package br.com.cod3r.mf.model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class Board {
    private int rows;
    private int columns;
    private int mines;

    private final List<Field> fields = new ArrayList<>();

    public Board(int rows, int columns, int mines) {
        this.rows = rows;
        this.columns = columns;
        this.mines = mines;

        generateFields();
        associateNeighbors();
        sortMines();
    }

    public void open(int row, int colum){
        fields.parallelStream()
                .filter(r -> r.getRow() == row)
                .filter(c -> c.getColumn() == colum)
                .findFirst()
                .ifPresent(f -> f.open());
    }

    public void toggleTag(int row, int colum){
        fields.parallelStream()
                .filter(r -> r.getRow() == row)
                .filter(c -> c.getColumn() == colum)
                .findFirst()
                .ifPresent(f -> f.toggleTag());
    }

    private void generateFields(){
        for (int r = 0; r < rows; r++){
            for (int c = 0; c < columns; c++) {
                fields.add(new Field(r, c));
            }
        }
    }

    private void associateNeighbors() {
        for (Field f1: fields){
            for (Field f2: fields){
                f1.addNeighbors(f2);
            }
        }
    }

    private void sortMines() {
        long armedMines = 0;
        Predicate<Field> mined = f -> f.isUndermined();

        do {
            armedMines = fields.stream().filter(mined).count();
            int random = (int) (Math.random() * fields.size());
            fields.get(random).undermine();
        } while (armedMines < mines);
    }

    public boolean goalAchieved(){
       return fields.stream().allMatch(f -> f.goalAchieved());
    }

    public void restart(){
        fields.stream().forEach(f -> f.restart());
        sortMines();
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();

        int i = 0;
        for (int r = 0; r < rows; r++) {

            for (int c = 0; c < columns; c++) {
                sb.append(" ");
                sb.append(fields.get(i));
                sb.append(" ");
                i++;
            }
            sb.append("\n");
        }
       return sb.toString();
    }
}
