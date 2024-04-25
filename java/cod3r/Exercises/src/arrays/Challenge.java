package arrays;

import java.util.Scanner;

public class Challenge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1 Step
        System.out.println("Enter the number of grades: ");
        int amount = scanner.nextInt();

        // 2 Step
        double[] grades = new double[amount];

        // 3 Step
        for (int i = 0; i <  amount; i++) {
            System.out.println("Enter grade " + (i + 1) + ": ");
            grades[i] = scanner.nextDouble();
        }

        // 4 Step
        double sum = 0;
        for (double grade : grades){
            sum += grade;
        }

        // 5 Step
        double average = sum / amount;

        // 6 Step
        System.out.printf("The average grade is: %.2f%n", average);

        scanner.close();

    }
}
