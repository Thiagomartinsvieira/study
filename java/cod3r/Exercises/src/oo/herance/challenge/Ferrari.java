package oo.herance.challenge;

public class Ferrari extends Car {

    Ferrari(){
        super(300);
    }

    @Override
    void speedUp() {
        super.speedUp();
      if(speed < MAXIMUM_SPEED){
          speed += 15;
      }
    }

    @Override
    void toBrake() {
       if (speed > 0){
           speed -= 10;
       }
    }
}
