package exercises;

import java.util.Scanner;

public class factorialProject {
    public static void main(String[] args) {

        System.out.println("Enter the fatorial number: ");
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        scanner.close();

        int f = 1;
        int c = n;

        while (c >= 1) {
            f *= c;
            c--;
        }

        System.out.println("The factorual of " + n + "is: " + f);

    }
}
