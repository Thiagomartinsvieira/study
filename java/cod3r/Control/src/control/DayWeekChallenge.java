package control;

import java.util.Objects;
import java.util.Scanner;

public class DayWeekChallenge {
    // Sunday -> 1
    // Monday -> 2
    // Tuesday -> 3
    // Wednesday -> 4
    // Thursday -> 5
    // Friday -> 6
    // Saturday -> 7
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a day of the week");

        String dayOFWeek = scanner.next();

        if(Objects.equals(dayOFWeek, "Sunday")){
            System.out.println(1);
        } else if (dayOFWeek.equals("Monday")) {
            System.out.println(2);
        } else if (dayOFWeek.equals("Tuesday")) {
            System.out.println(3);
        } else if (dayOFWeek.equals("Wednesday")) {
            System.out.println(4);
        } else if (dayOFWeek.equals("Thursday")) {
            System.out.println(5);
        } else if (dayOFWeek.equals("Friday")) {
            System.out.println(6);
        } else if (dayOFWeek.equals("Saturday")) {
            System.out.println(7);
        } else {
            System.out.println("Invalid day");
        }

    }

}
