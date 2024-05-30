package basic;

import javax.swing.*;

public class ConversionStringNumber {
    public static void main(String[] args) {
        String response1 = JOptionPane.showInputDialog(
                "What is the grade 1?");
        String response2 = JOptionPane.showInputDialog(
                "What is the grade 2?");

        System.out.println(response1 + response2);

        double grade1 = Double.parseDouble(response1);
        double grade2 = Double.parseDouble(response2);
        double total = grade1 + grade2;

        System.out.println(total / 2);
    }
}
