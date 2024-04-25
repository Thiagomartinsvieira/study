package control;

import java.util.Scanner;

public class WhileIndeterminate {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String value = "";

        while (!value.equalsIgnoreCase("exit")){
            System.out.println("You can speak: ");
            value = scanner.nextLine();
        }

        scanner.close();
    }
}
