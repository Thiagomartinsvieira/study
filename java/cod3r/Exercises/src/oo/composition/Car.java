package oo.composition;

public class Car {

    final Motor motor;

    Car(){
        this.motor = new Motor(this);
    }

    void speedUp(){
        if (motor.injectionFactor < 2.6){
            motor.injectionFactor += 0.4;
        }
    }

    void brake(){
        if (motor.injectionFactor > 0.5){
            motor.injectionFactor -= 0.4;
        }
    }

    void on(){
        motor.on = true;
    }

    void off(){
        motor.on = false;
    }

    boolean isOn(){
        return motor.on;
    }
}
