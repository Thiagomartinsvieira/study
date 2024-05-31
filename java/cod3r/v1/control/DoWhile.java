package control;

import java.util.Scanner;

public class DoWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double sumOfGrade = 0;
        int numberOfGrades = 0;
        double grade = 0;

        do {
            grade = scanner.nextDouble();

            if (grade <= 10 && grade >= 0){
                sumOfGrade += grade;
                numberOfGrades++;
            }
        } while (grade != -1);

        scanner.close();
        System.out.printf("The grade average is %.2f", sumOfGrade / numberOfGrades);
    }
}
