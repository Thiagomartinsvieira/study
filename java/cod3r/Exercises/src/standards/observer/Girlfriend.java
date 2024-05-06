package standards.observer;

public class Girlfriend implements ArrivalBirthdayObserver {

    public void itArrived(BirthdayArrivalEvent event) {
        System.out.println("Notify guests");
        System.out.println("Turn off the lights");
        System.out.println("And...Surprise!!!");
    }
}
