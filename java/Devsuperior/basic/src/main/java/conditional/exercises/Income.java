package conditional.exercises;

import java.util.Scanner;

public class Income {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter with your salary: ");

        double salary = scanner.nextDouble();

        if (salary < 2000.00) {
            System.out.println("Insect");
        } else if (salary >= 2000.01 && salary  <= 3000.00) {
            double salaryWithTax = salary * (8.0/100);
            System.out.println("tax 8% salary = " + salaryWithTax);
        } else if (salary >= 3000.01 && salary <= 4500.00) {
            double salaryWithTax = salary * (18.0/100);
            System.out.println("tax 18% salary = " + salaryWithTax);
        } else if (salary > 4500.00){
            double salaryWithTax = salary * (28.0/100);
            System.out.println("tax 28% salary = " + salaryWithTax);
        }

        scanner.close();
    }
}
