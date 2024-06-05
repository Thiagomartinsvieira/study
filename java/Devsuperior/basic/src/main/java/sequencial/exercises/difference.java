package sequencial.exercises;

import java.util.Scanner;

public class difference {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the 4 values: ");

        int A = scanner.nextInt();
        int B = scanner.nextInt();
        int C = scanner.nextInt();
        int D = scanner.nextInt();

        double result = A * B - C * D;

        System.out.println("Difference is: " + result);

        scanner.close();
    }
}
