package oo.polymorphism;

public abstract class Food {
    private double weight;
    public double getWeight() {
        return weight;
    }

    public Food(double weight){
        setWeight(weight);
    }

    public void setWeight(double weight) {
        if (weight >= 0){
            this.weight = weight;
        }
    }
}
