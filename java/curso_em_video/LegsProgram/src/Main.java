import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        System.out.print("How many legs? ");
        int leg = tec.nextInt();
        String type;
        System.out.print("This is an ");
        switch (leg) {
            case 1:
                type = "Saci";
                break;
            case 2:
                type = "Bipede";
                break;
            case 3:
                type = "Tripe";
                break;
            case 4:
                type = "Quadrupede";
                break;
            case 6:
                type = "Spider";
                break;
            default:
                type = "ET";
                break;
        }
        System.out.println(type);
    }
}
