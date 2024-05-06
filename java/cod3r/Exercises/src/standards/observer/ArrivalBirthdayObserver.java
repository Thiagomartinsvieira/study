package standards.observer;

@FunctionalInterface
public interface ArrivalBirthdayObserver {

    public void itArrived(BirthdayArrivalEvent event);
}
