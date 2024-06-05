package Repetitive.exercises;

import java.util.Scanner;

public class FuelStation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the fuel code: ");

        int alcohol = 0;
        int gasoline = 0;
        int diesel = 0;

        int type = scanner.nextInt();

        while (type != 4){
          if (type == 1){
              alcohol = alcohol + 1;
          } else if (type == 2) {
              gasoline = gasoline + 1;
          } else if (type == 3) {
              diesel = diesel + 1;
          }

          type = scanner.nextInt();
        }


        System.out.println("Thank you!");
        System.out.println("Alcohol: " + alcohol);
        System.out.println("Gasoline: " + gasoline);
        System.out.println("Diesel: " + diesel);

        scanner.close();
    }
}
