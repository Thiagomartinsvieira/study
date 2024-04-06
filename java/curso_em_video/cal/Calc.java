package cal;

import java.util.Scanner;

public class Calc {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a number");

        if (scanner.hasNext()) {
            int number = scanner.nextInt();
            int absoluteValue = Math.abs(number);
            int rest = number % 2;
            double raised = Math.pow(number, 3);
            double squareRoot = Math.sqrt(number);
            double cubicRoot = Math.cbrt(number);

            // format outputs with two

            String formattedSquareRoot = String.format("%.2f", squareRoot);
            String formattedCubicRoot = String.format("%.2f", cubicRoot);
            String formattedRaised = String.format("%.2f", raised);

            System.out.println("You entered the number " + number);
            System.out.println("Division rest " + rest);
            System.out.println("Raised to the cube " + formattedRaised);
            System.out.println("Square root " + formattedSquareRoot);
            System.out.println("Cubic root " + formattedCubicRoot);
            System.out.println("Absolute value: " + absoluteValue);
        } else {
            System.out.println("invalid number!");
        }
        scanner.close();
    }
}