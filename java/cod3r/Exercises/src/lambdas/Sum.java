package lambdas;

public class Sum implements Calc{

    @Override
    public double toExecute(double a, double b) {
        return a + b;
    }
}
