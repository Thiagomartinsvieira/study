package numbers;

import java.util.Scanner;

public class Numbers {
    public static void main(String[] args) {
        int n, s = 0;
        String resp;
        Scanner  keyboard = new Scanner(System.in);

        do {
            System.out.print("Enter with a one number: ");
            n = keyboard.nextInt();
            s += n;
            System.out.print("Do you want to continue ? [Y/N]");
            resp = keyboard.next();
        }while (resp.equals("Y"));
        System.out.println("The sum of all values is " + s);
    }
}
