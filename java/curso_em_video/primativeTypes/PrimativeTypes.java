package primativeTypes;

import java.util.Scanner;

public class PrimativeTypes {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        System.out.println("Enter the Student name");
        String name = keyboard.nextLine();
        System.out.println("Enter the students grade");
        float nota = keyboard.nextFloat();
        System.out.format("A nota de %s é %.1f \n", name, nota);
    }
}
