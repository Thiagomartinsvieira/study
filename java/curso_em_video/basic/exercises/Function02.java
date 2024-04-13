package exercises;

import exercises.function01.Factorial;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Function02 {
    private JSpinner txtNum;
    private JPanel lblResultado;
    private JButton button1;
    private JLabel txtFormula;
    private JLabel lblFormula;

    public Function02() {
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int n = Integer.parseInt(txtNum.getValue().toString());
                Fatorial f = new Factorial();
                f.setValue(n);
                lblFormula.setText(f.getFormula());
                lblResultado.setText(Integer.toString(f.getFatorial()));
            }
        });
    }
}
