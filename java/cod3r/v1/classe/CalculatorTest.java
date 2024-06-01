package classe;

public class CalculatorTest {
    public static void main(String[] args) {

        Calculator calc = new Calculator();

        System.out.println(calc.sum(2.4, 4.5));

        calc.add((10));
        System.out.println(calc.getResult());

        calc.clear();
        System.out.println(calc.getResult());;
    }
}
