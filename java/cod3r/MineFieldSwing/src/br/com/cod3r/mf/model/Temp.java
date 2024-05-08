package br.com.cod3r.mf.model;

public class Temp {
    public static void main(String[] args) {
        Board board = new Board(3, 3, 9);

        board.registerObserver((e -> {
            if (e.isWinner()){
                System.out.println("Winner");
            }  else {
                System.out.println("Lost");
            }
        }));

        board.toggleMarking(0, 0);
        board.toggleMarking(0, 1);
        board.toggleMarking(0, 2);
        board.toggleMarking(1, 0);
        board.toggleMarking(1, 1);
        board.toggleMarking(1, 2);
        board.toggleMarking(2, 0);
        board.toggleMarking(2, 1);
        board.open(2, 2);
//        board.toggleMarking(2, 2);
    }
}
