package memoryBehavior.exercises;

import java.util.Scanner;

public class NegativeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many numbers will you enter? ");
        int n = scanner.nextInt();

        int[] vet = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Enter a number: ");
            vet[i] = scanner.nextInt();
        }

        System.out.println("Negative numbers: ");
        for (int i = 0; i < n; i++) {
            if (vet[i] < 0) {
                System.out.println(vet[i]);
            }
        }

        scanner.close();

    }
}
