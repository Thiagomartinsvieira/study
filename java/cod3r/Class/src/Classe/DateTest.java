package Classe;

public class DateTest {
    public static void main(String[] args) {
        Date today = new Date();

        today.day = 24;
        today.month = 04;
        today.year = 2024;

        var christmas = new Date();
        christmas.day = 25;
        christmas.month = 12;
        christmas.year = 2024;

        System.out.printf("Today is %d/%d/%d\n", today.day, today.month, today.year);
        System.out.printf("Christmas is %d/%d/%d", christmas.day, christmas.month, christmas.year);

    }
}
