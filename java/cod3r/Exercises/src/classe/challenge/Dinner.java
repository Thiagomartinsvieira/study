package Classe.challenge;

import Classe.challenge.Food;
import Classe.challenge.Person;

public class Dinner {
    public static void main(String[] args) {
        Person person = new Person("Beatriz", 70.5);

        person.showWeigth();

        Food food1 = new Food("Rice", 0.3);
        Food food2 = new Food("Beans", 0.2);

        person.eat(food1);
        person.eat(food2);

        person.showWeigth();

    }
}
