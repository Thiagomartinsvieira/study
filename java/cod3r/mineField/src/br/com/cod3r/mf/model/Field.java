package br.com.cod3r.mf.model;

import br.com.cod3r.mf.exception.ExplosionException;

import java.util.ArrayList;
import java.util.List;

public class Field {
    private final int row;
    private final int column;
    private boolean open;
    private boolean undermined;
    private boolean marked;

    private List<Field> neighbors = new ArrayList<>();

    Field(int row, int column) {
        this.row = row;
        this.column = column;
    }

    boolean addNeighbors(Field neighbor){
        boolean differentRow = row != neighbor.row;
        boolean differentColumn = column != neighbor.column;
        boolean diagonal = differentRow && differentColumn;

        int deltaRow = Math.abs(row - neighbor.row);
        int deltaColumn = Math.abs(column - neighbor.column);
        int generalDelta = deltaColumn + deltaRow;

        if(generalDelta == 1 && !diagonal){
            neighbors.add(neighbor);
            return true;
        } else if (generalDelta == 2 && diagonal) {
            neighbors.add(neighbor);
            return true;
        } else {
            return false;
        }
    }

    void toggleTag(){
        if (!open){
            marked = !marked;
        }
    }

    boolean open(){

        if (!open && !marked){
            open = true;

            if (undermined){
                throw new ExplosionException();
            }

            if (safeNeighborhood()){
                neighbors.forEach(n -> n.open());
            }

            return true;
        } else {
            return false;
        }
    }

    boolean safeNeighborhood() {
        return neighbors.stream().noneMatch(n -> n.undermined);
    }

    void undermine(){
        undermined = true;
    }

    public boolean isUndermined(){
        return undermined;
    }

    public boolean isMarked() {
        return marked;
    }

    public boolean isOpen(){
        return open;
    }

    public int getRow() {
        return row;
    }

    public int getColumn() {
        return column;
    }

    boolean goalAchieved(){
        boolean unraveled = !undermined && open;
        boolean protegido = undermined && marked;
        return unraveled || protegido;
    }

    long minesInTheNeighborhood(){
        return neighbors.stream().filter(n -> n.undermined).count();
    }

    void restart(){
        open  = false;
        undermined = false;
        marked = false;
    }

    public String toString() {
       if (marked){
           return "X";
       } else if (open && undermined) {
           return "*";
       } else if (open && minesInTheNeighborhood() > 0){
           return Long.toString(minesInTheNeighborhood());
       } else if (open) {
           return " ";
       } else {
           return "?";
       }
    }
}
