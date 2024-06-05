package Repetitive.exercises;

import java.util.Scanner;

public class Password {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int password = scanner.nextInt();

        while (password != 2002){
            System.out.println("Invalid password");
            password = scanner.nextInt();
        }

        System.out.println("Access allowed ❤");

        scanner.close();
    }
}
