package oo.polymorphism;

public class Person {

    private double weight;
    public double getWeight() {
        return weight;
    }

    public Person(double weight){
        setWeight(weight);
    }

    public void eat(Food food){
        this.weight += food.getWeight();
    }
    public void setWeight(double weight) {
        if (weight >= 0){
            this.weight = weight;
        }
    }
}
