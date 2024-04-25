package Fundamentals;

import java.util.Scanner;

public class Temperature {
    public static void main(String[] args) {
        // (°F − 32) * 5/9 = °C

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the temperature in Fahrenheit");

        double fahrenheit = scanner.nextDouble();

        double degrees = (fahrenheit - 32) * 5/9.0;

        scanner.close();

        System.out.println("The converted temperature is " + degrees + " °C");

    }
}
