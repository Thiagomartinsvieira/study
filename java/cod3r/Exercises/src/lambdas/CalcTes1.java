package lambdas;

public class CalcTes1 {
    public static void main(String[] args) {
        Calc calc = new Sum();
        System.out.println(calc.toExecute(2, 4));

        calc = new Multiply();
        System.out.println(calc.toExecute(2,4));

    }
}
