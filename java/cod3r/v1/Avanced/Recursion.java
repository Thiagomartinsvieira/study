package Avanced;

public class Recursion {
    public static void main(String[] args) {
        System.out.println(factorialFor(3));
        System.out.println(factorialFor(4));
        System.out.println(factorialFor(5));
    }

    private static int factorialFor(int number) {
        int factorial = 1;

        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    }

    private static int factorial(int number) {
        if (number <= 1) {
            return 1;
        }

        return number * factorial(number - 1);
    }
}
