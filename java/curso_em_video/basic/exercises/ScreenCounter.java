package exercises;

import javax.swing.*;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class ScreenCounter {
    private JPanel panel1;
    private JSlider sliinicio;
    private JSlider sliFim;
    private JSlider sliPasso;
    private JButton btnCont;
    private JList listCont;
    private JLabel sli;
    private JLabel lblInicio;
    private JLabel lblFim;
    private JLabel lblPasso;

    public ScreenCounter() {
        sliinicio.addChangeListener(new ChangeListener() {
            @Override
            public void stateChanged(ChangeEvent e) {
                int i = sliinicio.getValue();
                lblInicio.setText(Integer.toString(i));
            }
        });
        sliFim.addChangeListener(new ChangeListener() {
            @Override
            public void stateChanged(ChangeEvent e) {
                int f = sliFim.getValue();
                lblFim.setText(Integer.toString(f));
            }
        });
        sliPasso.addChangeListener(new ChangeListener() {
            @Override
            public void stateChanged(ChangeEvent e) {
                int p = sliPasso.getValue();
                lblPasso.setText(Integer.toString(p));
            }
        });
        listCont.addListSelectionListener(new ListSelectionListener() {
            @Override
            public void valueChanged(ListSelectionEvent e) {
                int i = sliinicio.getValue();
                int f = sliFim.getValue();
                int p = sliPasso.getValue();

                DefaultListModel lista  = new DefaultListModel();

                for (int c = i; c <= f; c+=p){
                    lista.addElement(c);
                }

                listCont.setModel((lista));
            }
        });
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here
    }
}
