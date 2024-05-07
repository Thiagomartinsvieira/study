package swing;

import javax.swing.*;
import java.awt.*;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;

public class Observer {
    public static void main(String[] args) {
        JFrame window = new JFrame("Observer");
        window.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        window.setSize(600, 200);
        window.setLayout(new FlowLayout());
        window.setLocationRelativeTo(null);

        JButton button = new JButton("Click!");
        window.add(button);

        button.addActionListener(e -> {
            System.out.println("Occurred event!!!");
        });

        window.setVisible(true);
    }
}
