package oo.herance.challenge;

public class Car {

    final int MAXIMUM_SPEED;
    private int speed;
    private int delt = 5;

    public Car(int maximumSpeed){
        MAXIMUM_SPEED = maximumSpeed;
    }

    public void speedUp(){
      if (speed + getDelt() > MAXIMUM_SPEED){
          speed = MAXIMUM_SPEED;
      } else {
          speed += getDelt();
      }
    }

    public void toBrake(){
        if (speed > 0){
            speed -= 5;
        }
    }

    public int getSpeed(){
        return speed;
    }

    public int getDelt() {
        return delt;
    }

    public void setDelt(int delt) {
        this.delt = delt;
    }
}
