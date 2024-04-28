package oo.herance.challenge;

public class Polo extends Car {

    Polo(){
        super(170);
    }

    @Override
    void speedUp() {
        super.speedUp();
        if (speed < MAXIMUM_SPEED){
            speed += 7;
        }
    }

    @Override
    void toBrake() {
        if (speed > 0){
            speed -= 6;
        }
    }
}
