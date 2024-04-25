package Classe.challenge;

import Classe.challenge.Food;

public class Person {
    private String name;
    private double weight;

    public Person(String name, double weight) {
        this.name = name;
        this.weight = weight;
    }

    public void eat(Food food){
        if(food != null){
            this.weight += food.getWeigth();
        }
    }

    public void showWeigth(){
        System.out.println("Current weight of: " + name + ": " + weight + "Kg");
    }

}
