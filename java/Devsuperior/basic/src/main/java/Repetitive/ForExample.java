package Repetitive;

import java.util.Scanner;

public class ForExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many repetitions? ");

        int N = scanner.nextInt();
        int sum = 0;

        for (int i = 0; i < N; i++) {
            System.out.println("Value " + (i + 1) );
            int x = scanner.nextInt();
            sum = sum + x;
        }

        System.out.println("Sum is = " + sum);

        scanner.close();
    }
}
