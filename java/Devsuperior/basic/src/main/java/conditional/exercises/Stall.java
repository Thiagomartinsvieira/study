package conditional.exercises;

import java.util.Scanner;

public class Stall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the request number and amount: ");

        int order = scanner.nextInt();
        int amount = scanner.nextInt();

        if (order == 1){
            double price = amount * 4.00;
            System.out.println("Hot dog " + amount + "x " + "R$ " + price);
        } else if (order == 2) {
            double price = amount * 4.50;
            System.out.println("X-Salad " + amount + "x " + "R$ " + price);
        } else if (order == 3) {
            double price = amount * 5.00;
            System.out.println("X-Bacon " + amount + "x " + "R$ " + price);
        } else if (order == 4) {
            double price = amount * 2.00;
            System.out.println("Simple pie " + amount + "x " + "R$ " + price);
        } else if (order == 5) {
            double price = amount * 1.50;
            System.out.println("Soda " + amount + "x " + "R$ " + price);
        }


        System.out.println();

        scanner.close();
    }
}
