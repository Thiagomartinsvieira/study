package poo.exercises;

public class Employee {
    String name;
    double grossSalary;
    double tax;

    double netSalary() {
        return grossSalary - tax;
    }

    double increaseSalary(double percentage) {
        return grossSalary += grossSalary * percentage / 100.00;
    }

    public String toString() {
        return name + ", $ " + String.format("%.2f", netSalary());
    }
}