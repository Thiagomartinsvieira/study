package oo.herance.challenge;

import oo.herance.Sport;

public class Ferrari extends Car implements Sport, Lux {

    private boolean onTurbo;
    private boolean onAir;

    public Ferrari(){
        super(300);
        setDelt(15);
    }

    @Override
    public void onTurbo() {
        onTurbo = true;
    }

    @Override
    public void offTurbo() {
       onTurbo = false;
    }

    @Override
    public void onAir() {
        onAir = true;
    }

    @Override
    public void offAir() {
        onAir = false;
    }

    @Override
    public int airSpeed() {
        return Lux.super.airSpeed();
    }


    @Override
    public int getDelt() {
        if (onTurbo && !onAir){
            return 35;
        } else if (onTurbo && onAir) {
            return 30;
        } else if (!onTurbo && !onAir) {
            return 20;
        } else {
            return 15;
        }
    }

    @Override
    public void speedUp() {
        super.speedUp();
        int speed = 0;
        if(speed < MAXIMUM_SPEED){
          speed += 15;
      }
    }

    @Override
    public void toBrake() {
        int speed = 0;
        if (speed > 0){
           speed -= 10;
       }
    }
}
