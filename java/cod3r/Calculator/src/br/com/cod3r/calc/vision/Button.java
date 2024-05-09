package br.com.cod3r.calc.vision;

import javax.swing.*;
import java.awt.*;

public class Button extends JButton {
    public Button(String text, Color color){
        setText(text);
        setOpaque(true);
        setBorder(BorderFactory.createLineBorder(Color.BLACK));
        setBackground(color);
        setForeground(Color.white);
        setFont(new Font("courier", Font.PLAIN, 25));
    }
}
