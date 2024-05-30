package basic;

public class LogicalOperators {
    public static void main(String[] args) {
        boolean work1 = false;
        boolean work2 = true;

        boolean buyIceCream =  work1 || work2;
        boolean buyTv50 = work1 && work2;
        boolean buyTv32 = work1 ^work2;

        System.out.println("Ice cream = " + buyIceCream);
        System.out.println("Tv 50 = " + buyTv50);
        System.out.println("Tv 32 = " + buyTv32);

        System.out.println("Hunger = " + !buyIceCream);
    }
}
