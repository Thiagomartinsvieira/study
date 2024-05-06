package br.com.cod3r.mf;

import br.com.cod3r.mf.model.Board;
import br.com.cod3r.mf.vision.BoardConsole;

public class Application {
    public static void main(String[] args) {
        Board board = new Board(6, 6, 3);

        new BoardConsole(board);
        System.out.println(board);
    }
}
