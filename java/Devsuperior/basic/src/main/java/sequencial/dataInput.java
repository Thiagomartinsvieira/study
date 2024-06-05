package sequencial;

import java.util.Scanner;

public class dataInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//        System.out.print("Enter a number: ");
//
//        int number = scanner.nextInt();
//
//        System.out.print("Enter with your name: ");
//
//        String name = scanner.next();
//
//        System.out.print("What is your height: ");
//
//        double height = scanner.nextDouble();
//
//        System.out.println("Your genre: ");
//
//        char genre = scanner.next().charAt(0);
//
//        System.out.println("Your name is " + name);
//        System.out.println("Your height " + height);
//        System.out.println("Your number " + number);
//        System.out.println("Your genre " + genre);

        int x;
        String s1, s2, s3;

        x = scanner.nextInt();
        scanner.nextLine();
        s1 = scanner.nextLine();
        s2 = scanner.nextLine();
        s3 = scanner.nextLine();

        System.out.println("Entered data: ");
        System.out.println(x);
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);

        scanner.close();
    }
}
