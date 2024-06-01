package classe;

public class DateTest {
    public static void main(String[] args) {
        Date birth = new Date();
//        birth.day = 19;
//        birth.month = 11;
//        birth.year = 1997;

        Date marriage = new Date(9, 10, 2005);

        System.out.println(birth.format());
        System.out.println(marriage.format());
    }
}
