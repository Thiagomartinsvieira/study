package sequencial.exercises;

import java.util.Scanner;

public class ClothingParts {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Code for part 1");

        int partCode1 = scanner.nextInt();

        System.out.println("Code for part 2");

        int partCode2 = scanner.nextInt();

        System.out.println("Amount of pieces 1: ");

        double amount1 = scanner.nextInt();

        System.out.println("Amount of pieces 1: ");

        double amount2 = scanner.nextInt();

        System.out.println("Enter the part 1 price: ");

        double partvalue1 = scanner.nextDouble();

        System.out.println("Enter the part 2 price: ");

        double partvalue2 = scanner.nextDouble();

        double value1 = partvalue1 * amount1;
        double value2 = partvalue2 * amount2;

        double result = value1 + value2;

        System.out.printf("Amount to pay = %.2f", result);

        scanner.close();
    }
}
