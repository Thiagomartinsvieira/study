package poo.exercises;

import java.util.Scanner;

public class RectangleTest {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Rectangle rectangle = new Rectangle();

        System.out.println("Enter rectangle width and height: ");
        rectangle.width = scanner.nextInt();
        rectangle.height = scanner.nextInt();

        System.out.printf("AREA = %.2f%n", rectangle.area());
        System.out.printf("PERIMETER = %.2f%n", rectangle.perimeter());
        System.out.printf("DIAGONAL = %.2f%n", rectangle.diagonal());

        scanner.close();
    }
}
