package conditional.exercises;

import java.util.Scanner;

public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the number: ");

        int number = scanner.nextInt();

        if (number % 2 == 0) {
            System.out.println("The number is Even");
        } else
            System.out.println("The number is odd");

        scanner.close();
    }
}
