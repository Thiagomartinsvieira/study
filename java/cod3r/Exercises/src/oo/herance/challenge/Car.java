package oo.herance.challenge;

public class Car {

    final int MAXIMUM_SPEED;
    int speed;
    int delt = 5;

    Car(int maximumSpeed){
        MAXIMUM_SPEED = maximumSpeed;
    }

    void speedUp(){
      if (speed + delt > MAXIMUM_SPEED){
          speed = MAXIMUM_SPEED;
      } else {
          speed += delt;
      }
    }

    void toBrake(){
        if (speed > 0){
            speed -= 5;
        }
    }

}
