package Repetitive;

import java.util.Scanner;

public class WhileExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int x = scanner.nextInt();

        int sum = 0;
        while (x != 0){
            sum = sum + x;
            x = scanner.nextInt();
        }

        System.out.println(sum);

        scanner.close();
    }
}
