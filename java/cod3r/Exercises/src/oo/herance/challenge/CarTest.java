package oo.herance.challenge;

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
        ferrari.speedUp();
        ferrari.toBrake();

        System.out.println("The car speed is: " + car1.speed + "Km");
        System.out.println("The Polo speed is: " + polo1.speed + "Km");
        System.out.println("The Ferrari speed is: " + ferrari.speed + "Km");
    }
}
