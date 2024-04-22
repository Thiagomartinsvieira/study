package Fundamentals;

import java.util.Scanner;

public class ConversionChallenge {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first salary: ");

        double salary1 = Double.parseDouble(scanner.nextLine()
                .replace(",", "."));

        System.out.print("Enter the second salary: ");

        double salary2 = Double.parseDouble(scanner.nextLine()
                .replace(",", "."));

        System.out.print("Enter the third salary: ");

        double salary3 = Double.parseDouble(scanner.nextLine()
                .replace(",", "."));

        double averageSalary = (salary1 + salary2 + salary3) / 3;

        String formattedAverage = String.format("%.2f", averageSalary);

        System.out.println("The average salary is: " + formattedAverage);

        scanner.close();
    }
}
