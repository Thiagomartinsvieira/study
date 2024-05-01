package streams;

public class Media {

    private double total;
    private int amount;

    public Media add(double value){
        total += value;
        amount++;
        return this;
    }

    public double getValue(){
        return total / amount;
    }

    public static Media toCombine(Media m1, Media m2){
        Media resulting = new Media();
        resulting.total = m1.total + m2.total;
        resulting.amount = m1.amount + m2.amount;
        return resulting;
    }
}
