package conditional;

import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        String dia;
        switch (x) {
            case 1:
                dia = "Monday";
                break;
            case 2:
                dia = "Tuesday";
                break;
            case 3:
                dia = "Wednesday";
                break;
            case 4:
                dia = "Thursday";
                break;
            case 5:
                dia = "Friday";
                break;
            case 6:
                dia = "Saturday";
                break;
            case 7:
                dia = "Sunday";
                break;
            default:
                dia = "Discount value";
                break;
        }
        System.out.println("Day of week: " + dia);
        sc.close();
    }
}
