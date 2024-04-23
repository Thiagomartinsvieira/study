package Fundamentals;

import java.util.Scanner;

public class CalculatorChallenge {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a first number: ");

        double firstNumber = scanner.nextDouble();

        System.out.println("Enter a second number: ");

        double secondNumber = scanner.nextDouble();

        System.out.println("Choose the operation (+, -, *, /, %): ");
        String operation = scanner.next();

        // Logic

        double result = "+".equals(operation) ? firstNumber + secondNumber : 0;
        result = "-".equals(operation) ? firstNumber - secondNumber : result;
        result = "*".equals(operation) ? firstNumber * secondNumber : result;
        result = "/".equals(operation) ? firstNumber / secondNumber : result;
        result = "%".equals(operation) ? firstNumber % secondNumber : result;

        System.out.printf("%.2f %s %.2f = %.2f",
                firstNumber, operation, secondNumber, result);
        scanner.close();
    }
}
