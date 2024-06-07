package poo.exercises;

class CurrencyConverter {
    double dollarPrice;
    double dollarToBuy;
    double iof = 0.06;

    public double convertToReais(double dollars){
        double reaisWithoutIOF = dollars * dollarPrice;
        double iofAmount = reaisWithoutIOF * iof;
        return reaisWithoutIOF + iofAmount;
    }
}