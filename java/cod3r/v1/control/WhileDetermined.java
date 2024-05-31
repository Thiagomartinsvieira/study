package control;

import java.util.Scanner;

public class WhileDetermined {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double sumOfGrade = 0;
        double grade = 0;


        int index = 0;
        while (index < 3){
            grade = scanner.nextDouble();
            sumOfGrade += grade;
            index++;
        }

        scanner.close();
        System.out.printf("The average is %.2f", sumOfGrade / 3);
    }
}
