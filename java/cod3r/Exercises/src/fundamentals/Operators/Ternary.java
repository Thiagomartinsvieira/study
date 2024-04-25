package Fundamentals.Operators;

public class Ternary {
    public static void main(String[] args) {
        double media = 8.6;

        String parcialResult = media >= 5.0 ? "Recovery" : "Disapproved";
        String finalResult = media >= 7.0 ? "Approved" : parcialResult;

        System.out.println("The student is " + finalResult);


        double note = 7.3;
        boolean goodBehavior = true;
        boolean passedThroughMedia = note >= 7;
        boolean haveDiscount = goodBehavior && passedThroughMedia;
        String result = haveDiscount ? "Yes." : "No.";

        System.out.printf("Have a discount? %s", haveDiscount);
    }
}
