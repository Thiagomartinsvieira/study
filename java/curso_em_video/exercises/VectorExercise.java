package exercises;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.Arrays;

public class VectorExercise {

    int vetor [] = new int[5];
    DefaultListModel list = new DefaultListModel();
    int selecionado = 0;

    private JSpinner txtNum;
    private JPanel panel1;
    private JButton btnOrdem;
    private JButton btnAdd;
    private JButton btnRemove;
    private JList listVetor;
    private JLabel lblSelecionado;

    public VectorExercise() {
        listVetor.addListSelectionListener(new ListSelectionListener() {
            @Override
            public void valueChanged(ListSelectionEvent e) {

            }
        });
        btnRemove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                vetor[selecionado] = Integer.parseInt(txtNum.getValue().toString());
                list.removeAllElements();
                for (int c = 0; c < vetor.length; c++){
                    list.addElement(vetor[c]);
                }
            }
        });
        listVetor.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                selecionado = listVetor.getSelectedIndex();
                lblSelecionado.setText("[" + selecionado + "]");
            }
        });
        btnRemove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                vetor[selecionado] = 0;
                list.removeAllElements();
                for (int c = 0; c < vetor.length; c++){
                    list.addElement(vetor[c]);
                }
            }
        });
        btnOrdem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Arrays.sort(vetor);
                list.removeAllElements();
                for (int c = 0; c < vetor.length; c++){
                    list.addElement(vetor[c]);
                }
            }
        });
    }
}
