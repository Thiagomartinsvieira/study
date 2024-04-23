package Fundamentals.Operators;

public class LogicalChallenge {
    public static void main(String[] args) {
        // Work on tuesday (V or F)
        // Work on thursday (V or F)

        boolean work1 = false;
        boolean work2 = true;

        boolean eatIceCream = false;

        if(work1 && work2){
            eatIceCream = true;
            System.out.println("52 inch TV purchased " + "Eat ice cream ? "
                    + eatIceCream);
        } else if (work1 ^ work2) {
            eatIceCream = true;
            System.out.println("32 inch TV purchased " + "Eat ice cream ? " +
                    eatIceCream);
        } else if (!work1 && !work2) {
            eatIceCream = false;
            System.out.println("We didn't buy the tv " + "Eat ice cream ? " +
                    eatIceCream);
        }
    }
}
