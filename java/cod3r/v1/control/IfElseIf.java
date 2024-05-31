package control;

public class IfElseIf {
    public static void main(String[] args) {
        double grade = 4.5;

        if (grade >= 9) {
            System.out.println("Honor board!");
        } else if (grade >= 7) {
            System.out.println("Approved");
        } else if (grade >= 4.5) {
            System.out.println("Recovery");
        } else {
            System.out.println("Disapproved");
        }
    }
}
