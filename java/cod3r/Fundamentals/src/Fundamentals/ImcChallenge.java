package Fundamentals;

import java.util.Scanner;

public class ImcChallenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your weight: ");

        double weight = scanner.nextDouble();

        System.out.println("Enter your height: ");

        double height = scanner.nextDouble();

        scanner.close();

        double squaredHeight = height * height;

        double imc = weight / squaredHeight;

        System.out.println("Your imc is " + imc);

    }
}
