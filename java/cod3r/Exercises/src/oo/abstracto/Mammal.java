package oo.abstracto;

public abstract class Mammal extends Animal{

    public abstract String breastfeed();
    @Override
    public String move() {
        return "Leaving the place";
    }
}
