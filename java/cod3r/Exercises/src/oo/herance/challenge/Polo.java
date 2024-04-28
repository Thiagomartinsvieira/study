package oo.herance.challenge;

public class Polo extends Car {

    public Polo(){
        super(170);
    }

    @Override
    public void speedUp() {
        super.speedUp();
        int speed = 0;
        if (speed < MAXIMUM_SPEED){
            speed += 7;
        }
    }

    @Override
    public void toBrake() {
        int speed = 0;
        if (speed > 0){
            speed -= 6;
        }
    }
}
