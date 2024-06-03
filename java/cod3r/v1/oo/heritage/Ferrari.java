package oo.heritage;

public class Ferrari extends Car {
    public Ferrari() {
        MAXIMUM_SPEED = 350;
    }

    @Override
    public void speedUp() {
        super.speedUpMore(20);
    }
}
