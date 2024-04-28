package oo.abstracto;

public class Dog extends Mammal {

    @Override
    public String breastfeed() {
        return "Using mil";
    }

    @Override
    public String move() {
        return "Using your paws";
    }
}
