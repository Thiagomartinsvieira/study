package mediaProgram;

import java.util.Scanner;

public class logicalOperators {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("First note");
            float n1 = scanner.nextFloat();
            System.out.println("Second note");
            float n2 = scanner.nextFloat();
            float m = (n1 + n2) / 2;
            System.out.println("Its average was " + m);
            if (m > 9) {
                System.out.println("Congratulations, small locust!");
            }
        }
    }
}