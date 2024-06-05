package sequencial;

public class MainProgram {
    public static void main(String[] args) {
        double x = 10.25343;

        String name = "Dayane";
        int age = 19;
        double income = 2000.0;

        System.out.println(x);
        System.out.printf("%.2f%n", x);
        System.out.printf("%.4f%n", x);

        System.out.println("Result " + x + " Meters");
        System.out.printf("Result %.2f meters %n", x);
        System.out.printf("%s have %d and receive %.2f dollars %n", name, age, income);
    }
}
