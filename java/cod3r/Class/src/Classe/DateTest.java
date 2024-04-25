package Classe;

public class DateTest {
    public static void main(String[] args) {

        Date today = new Date(23, 10, 2024);

        Date d1 = new Date();
        d1.printFormattedDate();

        System.out.println();

        var christmas = new Date();
        christmas.day = 25;
        christmas.month = 12;
        christmas.year = 2024;

        System.out.println(today.getDateFormatted());
        System.out.println(christmas.getDateFormatted());

        today.printFormattedDate();
        d1.printFormattedDate();
    }
}
