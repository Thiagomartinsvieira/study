package sequencial.exercises;

import java.util.Scanner;

public class Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Your id employee number: ");
        int id = scanner.nextInt();

        System.out.println("How much do you earn per hour: ");

        double hourlySalary = scanner.nextDouble();

        System.out.println("Worked hours: ");

        double workedHours = scanner.nextDouble();

        double salary = hourlySalary * workedHours;

        System.out.println("Your id: " + id);
        System.out.println("Salary: " + salary);

        scanner.close();
    }
}
