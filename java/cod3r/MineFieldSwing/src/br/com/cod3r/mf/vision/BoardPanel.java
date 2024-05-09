package br.com.cod3r.mf.vision;

import br.com.cod3r.mf.model.Board;

import javax.swing.*;
import java.awt.*;

public class BoardPanel extends JPanel {
    public BoardPanel(Board board){

        setLayout(new GridLayout(board.getRows(), board.getColumns()));

        board.forEachField(f -> add(new FieldButton(f)));
        board.registerObserver(e -> {

            SwingUtilities.invokeLater(() -> {
                if(e.isWinner()) {
                    JOptionPane.showMessageDialog(this, "Congratulations :)");
                } else {
                    JOptionPane.showMessageDialog(this, "You Lost :(");
                }

                board.reset();
            });
        });
    }
}
