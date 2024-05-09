package br.com.cod3r.mf.vision;

import br.com.cod3r.mf.model.Board;

import javax.swing.*;

public class MainScreen extends JFrame {

    public MainScreen(){
        Board board = new Board(16, 30, 20);

        add(new BoardPanel(board));

        setTitle("Minefield");
        setSize(690, 438);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setVisible(true);
    }
    public static void main(String[] args) {
        new MainScreen();
    }
}
