package Fundamentals;

import java.util.Scanner;

public class Console {
    public static void main(String[] args) {
        System.out.print("Good");
        System.out.print(" Morning\n");

        System.out.println("Good");
        System.out.println("Morning");

        System.out.printf("MegaSena: %d %d %d %d %d %d %n",
                1, 2, 3, 4, 5, 6);
        System.out.printf("Salary: %.1f%n", 1243.5678);
        System.out.printf("Name: %s%n", "Thiago");

        Scanner scanner = new Scanner(System.in);

        System.out.print("Type your name: ");
        String name =  scanner.nextLine();

        System.out.print("Type your last name: ");
        String lastName =  scanner.nextLine();

        System.out.print("Type your age: ");
        int age =  scanner.nextInt();

        System.out.printf("%s %s has %d years.%n", name, lastName, age);

        scanner.close();
    }
}
