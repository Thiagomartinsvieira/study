package basic;

public class VariableAndConstant {
    public static void main(String[] args) {
        double ray = 4.5;
        final double PI = 3.1416;
        double area = PI * ray * ray;

        System.out.println("Area is " + area + " m2.");
        System.out.printf("Area is %f m2 \n", area);
        System.out.printf("Area is %.2f m2", area);
    }
}
