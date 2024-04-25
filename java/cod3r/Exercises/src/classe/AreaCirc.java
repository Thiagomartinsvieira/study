package Classe;

public class AreaCirc {

    double raio;
    static final double PI = 3.1415;

    AreaCirc(double initialRaio){
        raio = initialRaio;
    }

    double area(){
        return PI * Math.pow(raio, 2);
    }

    static double area(double raio){
        return PI * Math.pow(raio, 2);
    }
}
