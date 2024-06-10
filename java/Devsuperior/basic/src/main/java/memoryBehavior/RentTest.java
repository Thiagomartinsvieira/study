package memoryBehavior;

import entities.Rent;

import java.util.Scanner;


public class RentTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Rent[] vetc = new Rent[10];

        System.out.println("How many rooms will be rented? ");
        int n = scanner.nextInt();

        for (int i = 1; i < n; i++) {
            System.out.println();
            System.out.println("Rent #" + i + ":");
            System.out.println("Name: ");
            scanner.nextLine();
            String name = scanner.nextLine();
            System.out.println("Email: ");
            String email = scanner.next();
            System.out.println("Room: ");
            int roomNumber = scanner.nextInt();

            Rent rent = new Rent(name, email);

            vetc[roomNumber] = rent;
        }

        System.out.println();
        System.out.println("Busy rooms: ");
        for (int i = 0; i < 10; i++) {
            if (vetc[i] != null){
                System.out.println(i + ": " + vetc[i]);
            }
        }

        scanner.close();
    }
}
