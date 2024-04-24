package control;

import java.util.Scanner;

public class SwitchWithBreak {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String concept = "";
        System.out.print("Enter the grade: ");
        int grade = scanner.nextInt();

        switch (grade){
            case 10: case 9:
                concept = "A";
                break;
            case 8: case 7:
                concept = "B";
                break;
            case 6: case 5:
                concept = "C";
                break;
            case 4: case 3:
                concept = "D";
                break;
            case 2: case 1: case 0:
                concept = "E";
                break;
            default:
                concept = "Uniformed!";
                break;
        }

        System.out.println("Concept is " + concept);
        scanner.close();
    }
}
