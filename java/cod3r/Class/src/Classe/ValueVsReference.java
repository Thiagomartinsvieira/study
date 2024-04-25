package Classe;

public class ValueVsReference {
    public static void main(String[] args) {

        double a = 2;
        double b = a; // assignment by value ( Primitive type )

        a++;
        b--;

        System.out.println(a + " " + b);

        Date d1 = new Date(1, 6, 2023);
        Date d2 = d1; // assignment by reference ( object )

        d1.day = 31;
        d2.month = 12;

        d1.year = 2024;

        System.out.println(d1.getDateFormatted());
        System.out.println(d2.getDateFormatted());

        backDateForDefaultValue(d1);

        System.out.println(d1.getDateFormatted());
        System.out.println(d2.getDateFormatted());

        int c = 5;
        changePrimitive(c);
        System.out.println(c);
    }

    static void backDateForDefaultValue(Date d){
        d.day = 1;
        d.month = 1;
        d.year = 1970;
    }

    static void changePrimitive(int c){
        c++;
    }
}
