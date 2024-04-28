package oo.herance.test;

import oo.herance.challenge.Car;
import oo.herance.challenge.Ferrari;
import oo.herance.challenge.Polo;

public class CarTest {
    public static void main(String[] args) {
        Car car1 = new Car(160);
        Ferrari ferrari = new Ferrari();
        Polo polo1 = new Polo();

        polo1.speedUp();
        polo1.toBrake();
        polo1.toBrake();

        car1.speedUp();
        car1.toBrake();
        car1.toBrake();

        ferrari.speedUp();
        ferrari.onTurbo();
        ferrari.speedUp();
        ferrari.speedUp();
        ferrari.toBrake();

        System.out.println(ferrari.airSpeed());

        System.out.println("The car speed is: " + car1.getSpeed() + "Km");
        System.out.println("The Polo speed is: " + polo1.getSpeed() + "Km");
        System.out.println("The Ferrari speed is: " + ferrari.getSpeed() + "Km");
    }
}
