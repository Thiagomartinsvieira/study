package exercises;

import java.util.Scanner;

public class EvenOrAdd {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter a one number: ");

            int number = scanner.nextInt();

            if(number%2 == 0){
                System.out.println("Even");
            } else {
                System.out.println("Odd");
            }
        }
    }
}
