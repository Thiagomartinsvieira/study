package exercises;

import javax.swing.JOptionPane;

public class RepeatExercise {
    public static void main(String[] args) {
        int n;
        int totalNumbers = 0;
        int sum = 0;
        int evenCount = 0;
        int oddCount = 0;
        int above100Count = 0;
        double average;
        do {
            n = Integer.parseInt(JOptionPane.showInputDialog(null, "<html>Enter a number: <br><em>(0 value stpos)<em></html>"));

            if(n != 0){
                sum += n;
                totalNumbers++;

                if(n % 2 == 0) evenCount++;
                else oddCount++;

                if(n > 100) above100Count++;
            }

        } while (n != 0);

        if(totalNumbers > 0){
            average = (double) sum / totalNumbers;
        } else {
            average = 0;
        }

        JOptionPane.showMessageDialog(null, "<html>Final Result <br> <hr>" +
                "Total Numbers: " + totalNumbers + "<br> " +
                "Sum: " + sum + "<br> " +
                "Even Numbers: " + evenCount + "<br> " +
                "Odd Numbers: " + oddCount + "<br> " +
                "Numbers above 100: " + above100Count + "<br> " +
                "Average: " + String.format("%.2f", average) + "</html>");

    }
}
