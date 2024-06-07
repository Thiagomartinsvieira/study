package poo.exercises;

import java.util.Scanner;

public class EmployeeTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Employee employee = new Employee();

        System.out.print("Enter your name: ");
        employee.name = scanner.nextLine();
        System.out.print("Gross salary: ");
        employee.grossSalary = scanner.nextDouble();
        System.out.print("Tax: ");
        employee.tax = scanner.nextDouble();
        System.out.println();

        System.out.println("Employee: " + employee.name + "$" + employee.netSalary());

        System.out.print("Which percentage to increase salary? ");
        double percentage = scanner.nextDouble();
        employee.increaseSalary(percentage);

        System.out.println();
        System.out.println("Updated data: " + employee);
        scanner.close();
    }
}
