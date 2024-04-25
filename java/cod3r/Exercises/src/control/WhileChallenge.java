package control;

import java.util.Scanner;

public class WhileChallenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double sum = 0;
        int count = 0;
        double grade;

        do {
            System.out.println("Enter a grade (0 to 10) or -1 to finish");
            grade = scanner.nextDouble();

            if (grade == -1){
                break;
            }

            if(grade < 0 || grade > 10){
                System.out.println("Invalid grade! Please enter a grade between 0 and 10.");
                continue;
            }

            sum += grade;
            count++;
        } while (grade != -1);

        scanner.close();

        if(count > 0){
            double average = sum / count;
            System.out.printf("The average grade is: %.2f%n", average);
        } else {
            System.out.println("No valid grades were entered");
        }

    }
}
