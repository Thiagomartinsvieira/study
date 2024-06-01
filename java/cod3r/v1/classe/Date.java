package classe;

public class Date {
    int day;
    int month;
    int year;

    Date(){
       this(1, 1, 2000);
    }

    Date(int day, int month, int year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    String format() {
        return String.format("%d/%d/%d", day, month, year);
    }
}
