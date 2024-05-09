package br.com.cod3r.mf.vision;

import br.com.cod3r.mf.model.Field;
import br.com.cod3r.mf.model.FieldEvent;
import br.com.cod3r.mf.model.FieldObserver;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class FieldButton extends JButton implements FieldObserver, MouseListener {

    private final Color BG_DEFAULT = new Color(184, 184, 184);
    private final Color BG_MARKED = new Color(8, 179, 247);
    private final Color BG_EXPLODE = new Color(189, 66, 68);
    private final Color TEXT_GREEN = new Color(0, 100, 0);
    private Field field;
    public FieldButton(Field field){
        this.field = field;
        setBackground(BG_DEFAULT);
        setOpaque(true);
        setBorder(BorderFactory.createBevelBorder(0));

        addMouseListener(this);
        field.registerObserver(this);
    }

    public void eventOccurred(Field field, FieldEvent event){
        switch (event){
            case OPEN:
                applyStyleOpen();
                break;
            case MARK:
                applyStyleMark();
                break;
            case EXPLODE:
                applyStyleExplode();
                break;
            default:
                applyStyleDefault();
        }

        SwingUtilities.invokeLater(() -> {
            repaint();
            validate();
        });
    }

    private void applyStyleDefault() {
        setBackground(BG_DEFAULT);
        setBorder(BorderFactory.createBevelBorder(0));
        setText("");
    }

    private void applyStyleExplode() {
        setBackground(BG_EXPLODE);
        setForeground(Color.white);
        setText("X");
    }

    private void applyStyleMark() {
        setBackground(BG_MARKED);
        setForeground(Color.black);
        setText("M");
    }

    private void applyStyleOpen () {

        setBorder(BorderFactory.createLineBorder(Color.GRAY));

        if (field.isMined()){
            setBackground(BG_EXPLODE);
            return;
        }

        setBackground(BG_DEFAULT);

        switch (field.minesInNeighborhood()){
            case 1:
                setForeground(TEXT_GREEN);
                break;
            case 2:
                setForeground(Color.blue);
                break;
            case 3:
                setForeground(Color.YELLOW);
                break;
            case 4:
            case 5:
            case 6:
                setForeground(Color.RED);
                break;
            default:
                setForeground(Color.PINK);
        }

        String value = !field.safeNeighborhood() ?
                field.minesInNeighborhood() + "" : "";
        setText(value);
    }

    // Mouse Interface
    public void mousePressed(MouseEvent e) {
        if(e.getButton() == 1) {
            field.open();
        } else {
            field.toggleMarking();
        }
    }
    public void mouseClicked(MouseEvent e) {}
    public void mouseEntered(MouseEvent e) {}
    public void mouseExited(MouseEvent e) {}
    public void mouseReleased(MouseEvent e) {}
}
