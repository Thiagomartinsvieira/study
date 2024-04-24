package control;

import java.util.Scanner;

public class DoWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = "";

        do {
            System.out.println("You need to speek the magic words...");

            System.out.print("Need to leave? ");
            text = scanner.nextLine();
        } while (!text.equalsIgnoreCase("Please"));

        System.out.println("Thank you!");
        scanner.close();
    }
}
