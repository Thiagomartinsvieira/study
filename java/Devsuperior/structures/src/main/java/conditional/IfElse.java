package conditional;

import java.util.Scanner;

public class IfElse {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("How many hours ? ");
        int hour = scanner.nextInt();

        if (hour < 12){
            System.out.println("Good Morning");
        } else if (
                hour < 18) {
            System.out.println("Good Afternoon");
        } else {
            System.out.println("Good Evening");
        }

        scanner.close();
    }
}
