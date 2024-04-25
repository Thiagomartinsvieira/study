package control;

import java.util.Scanner;

public class If {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Inform the media: ");
        double media = scanner.nextDouble();

        if (media <= 10 && media >= 7){
            System.out.println("Passed");
            System.out.println("Congratulations!");
        } if(media < 7 && media >= 5) {
            System.out.println("Recovery");
        } if (media < 5 && media >= 0) {
            System.out.println("Failed");
        }

        scanner.close();
    }
}
