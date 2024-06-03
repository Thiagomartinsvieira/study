package oo.polymorphism;

public class Person {
    private double weight = 0;

    public Person(double initialWeight) {
        this.weight = initialWeight;
    }

    public double getWeight() {
        return weight;
    }

    public void toEat(Food... foods) {
        for (Food f: foods){
            this.weight += f.getWeight();
        }
    }

}
