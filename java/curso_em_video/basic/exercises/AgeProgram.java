package exercises;

import java.util.Scanner;

public class AgeProgram {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter year of bird: ");
            float birth = scanner.nextInt();
            int age = (int) (2024 - birth);
            System.out.println("Your age is " + age);
            if (age >= 18) {
                System.out.println("Bigger!");
            } else {
                System.out.println("Smaller!");
            }
        }
    }
}
