package Repetitive.exercises;

import java.util.Scanner;

public class ForExercise {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the value: ");

        int N = scanner.nextInt();

        for (int i = 1; i <= N; i++) {

            int first = i;
            int second = i * i;
            int third = i * i * i;

            System.out.printf("%d %d %d%n", second, first, third);
        }

        scanner.close();
    }
}
