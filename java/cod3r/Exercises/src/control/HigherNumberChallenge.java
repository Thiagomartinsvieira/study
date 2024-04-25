package control;

import java.util.Scanner;

public class HigherNumberChallenge {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int counter = 0;
        int higher = Integer.MIN_VALUE;

        while (counter < 10){
            System.out.println("Enter the " + (counter + 1) + "º valor: ");
            int value = scanner.nextInt();

            if(value > higher){
                higher = value;
            }

            counter++;

        }

        System.out.println("The higher number is: " + higher);

        scanner.close();

    }

}
