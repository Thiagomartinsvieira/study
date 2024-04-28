package lambdas;

public class CalcTest2 {
    public static void main(String[] args) {

        Calc calc = (x, y) -> { return x + y; };
        System.out.println(calc.toExecute(2, 4));

        calc = (x, y) -> x * y;
        System.out.println(calc.toExecute(2, 3));

        System.out.println(calc.cool());
        System.out.println(Calc.great());
    }
}
