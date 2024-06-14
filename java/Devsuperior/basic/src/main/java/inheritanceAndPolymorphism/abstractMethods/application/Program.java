package inheritanceAndPolymorphism.abstractMethods.application;

import inheritanceAndPolymorphism.abstractMethods.entities.Circle;
import inheritanceAndPolymorphism.abstractMethods.entities.Rectangle;
import inheritanceAndPolymorphism.abstractMethods.entities.Shape;
import inheritanceAndPolymorphism.abstractMethods.entities.enums.Color;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Shape> list = new ArrayList<>();

        System.out.println("Enter the number of shapes: ");
        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("Shape #" + i + " data:");
            System.out.print("Rectangle or Circle (r/c)?");
            char ch = scanner.next().charAt(0);
            System.out.print("Color (Black/Blue/RED): ");
            Color color = Color.valueOf(scanner.next());
            if (ch == 'r'){
                System.out.print("Width: ");
                double width = scanner.nextDouble();
                System.out.print("Height: ");
                double height = scanner.nextDouble();
                list.add(new Rectangle(color, width, height));
            }
            else {
                System.out.print("Radius: ");
                double radius = scanner.nextDouble();
                list.add(new Circle(color, radius));
            }
        }

        System.out.println();
        System.out.println("SHAPE AREAS: ");
        for (Shape shape : list){
            System.out.println( String.format("%.2f", shape.area()));
        }

        scanner.close();

    }
}
