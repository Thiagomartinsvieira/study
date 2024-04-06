package exercises;

import java.util.Scanner;

public class madatoryVote {
    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Enter with your age");

            int age = scanner.nextInt();

            if (age < 16) {
                System.out.println("You are not eligible to vote");
            } else if (age >= 16 && age < 18 || age > 70) {
                System.out.println("Voting is optional");
            } else {
                System.out.println("Voting is mandatory for you2");
            }
        }
    }
}
