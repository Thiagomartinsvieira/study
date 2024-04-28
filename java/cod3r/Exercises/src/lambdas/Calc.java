package lambdas;

@FunctionalInterface
public interface Calc {

    double toExecute(double a, double b);

    default String cool(){
        return "Cool";
    }
    static String great(){
        return "Great!!!";
    }
}
