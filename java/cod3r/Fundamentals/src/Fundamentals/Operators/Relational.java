package Fundamentals.Operators;

public class Relational {
    public static void main(String[] args) {

        int a = 97;
        int b = 'a';

        System.out.println(a == b);

        System.out.println(3 > 4);
        System.out.println(3 >= 3);
        System.out.println(3 < 7);
        System.out.println(30 <= 7);
        System.out.println(30 != 7);

        double note = 7.3;
        boolean goodBehavior = true;
        boolean passedThroughMedia = note >= 7;
        boolean haveDiscount = goodBehavior && passedThroughMedia;

        System.out.println("Have a discount? " + haveDiscount);
    }
}
