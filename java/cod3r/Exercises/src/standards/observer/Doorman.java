package standards.observer;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Doorman {

    private List<ArrivalBirthdayObserver> observers
            = new ArrayList<>();

    public void registerObserver(ArrivalBirthdayObserver observer){
        observers.add(observer);
    }

    public void toMonitor(){
        Scanner scanner = new Scanner(System.in);

        String value = "";

        while (!"Exit".equalsIgnoreCase(value)){
            System.out.print("Birthday boy has arrived ? ");
            value = scanner.nextLine();

            if ("yes".equalsIgnoreCase(value)){

                BirthdayArrivalEvent event =
                        new BirthdayArrivalEvent(new Date());

                observers.stream().forEach(o -> o.itArrived(event));
                value = "exit";

            } else {
                System.out.println("False alarm!");
            }
        }

        scanner.close();
    }
}
