package classe;

public class Calculator {
    double result;

    double sum(double a, double b){
        result = a + b;
        return result;
    }

    void add(double a){
        result += a;
    }

    double getResult(){
        return result;
    }

    void clear(){
        result = 0;
    }
}
