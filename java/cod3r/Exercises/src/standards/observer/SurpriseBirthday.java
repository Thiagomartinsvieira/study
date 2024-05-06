package standards.observer;

public class SurpriseBirthday {
    public static void main(String[] args) {
        Girlfriend girlfriend = new Girlfriend();
        Doorman doorman = new Doorman();

        doorman.registerObserver(girlfriend);
        doorman.registerObserver(e -> {
            System.out.println("Surprise by lambada!");
            System.out.println("Occurred in: " + e.getMoment());
        });
        doorman.toMonitor();
    }
}
