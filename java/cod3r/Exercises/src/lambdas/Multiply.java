package lambdas;

public class Multiply implements Calc {

    @Override
    public double toExecute(double a, double b) {
        return a * b;
    }
}
