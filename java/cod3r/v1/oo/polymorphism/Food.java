package oo.polymorphism;

public class Food {
    private double weight = 0;
    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        if (weight > 0) {
            this.weight = weight;
        }
    }
}
