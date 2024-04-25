package control;

import java.util.Scanner;

public class IfElseIf {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the note: ");
        double note = scanner.nextDouble();

        if(note > 10 || note < 0){
            System.out.println("Invalid note");
        } else if (note >= 8.1) {
            System.out.println("Concept A");
        } else if (note >= 6.1) {
            System.out.println("Concept B");
        } else if (note >= 4.1){
            System.out.println("Concept C");
        } else if (note >= 2.1 ) {
            System.out.println("Concept D");
        }


        System.out.println("Finish");
        scanner.close();
    }
}
