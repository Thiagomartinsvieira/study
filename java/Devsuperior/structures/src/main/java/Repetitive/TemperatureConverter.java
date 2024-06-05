package Repetitive;

import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char response;
        do {
            System.out.println("Enter the temperature in Celsius: ");
            double celsius = scanner.nextDouble();
            double fahrenheit = 9.0 * celsius / 5.0 + 32.0;
            System.out.printf("Equivalent fahrenheit: %.2f%n", fahrenheit);
            System.out.print("Want to repeat (s/n)? ");
            response = scanner.next().charAt(0);
        } while (response != 'n');

        scanner.close();
    }
}
