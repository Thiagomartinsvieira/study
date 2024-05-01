package streams.challenge;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class Filter {
    public static void main(String[] args) {

        CarDealership car1 = new CarDealership("Polo", "Hatch", 2010, true);
        CarDealership car2 = new CarDealership("Fiesta", "Sedan", 2023, false);
        CarDealership car3 = new CarDealership("Civic", "Sedan", 2010, true);
        CarDealership car4 = new CarDealership("Golf", "Hatch", 2024, false);
        CarDealership car5 = new CarDealership("Tiguan", "SUV", 2022, true);

        List<CarDealership> carDealerships = Arrays.asList(car1, car2, car3, car4, car5);

        Predicate<CarDealership> newCar = n -> n.year >= 2020;
        Predicate<CarDealership> used = u -> u.used;
        Predicate<CarDealership> hatch = h -> h.segment.equals("Hatch");

        Function<CarDealership, String> carName =
                c -> "Your car is " + c.car + " Year " + c.year;

        carDealerships.stream()
                .filter(used.negate())
                .filter(newCar)
                .filter(hatch)
                .map(carName)
                .forEach(System.out::println);
    }
}
