package Repetitive.exercises;

import java.util.Scanner;

public class Dividers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the value: ");

        int N = scanner.nextInt();

        for (int i = 1; i <= N; i++) {
            if (N % i == 0){
                System.out.println(i);
            }
        }

        scanner.close();
    }
}
