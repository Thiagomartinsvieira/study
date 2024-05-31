package control;

import java.util.Scanner;

public class For {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double sumOfGrades = 0;
        double grade = 0;

        for (int index = 0; index < 3; index++){
            grade = scanner.nextDouble();
            sumOfGrades += grade;
        }

        scanner.close();
        System.out.printf("The average is %.2f", sumOfGrades / 3);
    }
}
