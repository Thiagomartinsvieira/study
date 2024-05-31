package control;

import java.util.Scanner;

public class WhileIndeterminate {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double gradeSum = 0;
        double grade = 0;
        int numberOfGrades = 0;

        while (grade != -1){
            grade = scanner.nextDouble();

            if (grade <= 10 && grade >= 0) {
                gradeSum += grade;
                numberOfGrades++;
            }
        }

        scanner.close();
        System.out.printf("The average is %.2f", gradeSum / numberOfGrades);
    }
}
