package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class Map {
    public static void main(String[] args) {

        Consumer<String> print = System.out::print;

        List<String> brands = Arrays.asList("Audi", "VW", "Scania");
        brands.stream().map(b -> b.toUpperCase()).forEach(print);

        UnaryOperator<String> firstLetter = n -> n.charAt(0) + "";

        System.out.println("\n\nUsing composition...");
        brands.stream()
                .map(Ultilities.uppercase)
                .map(firstLetter)
                .map(Ultilities::shout)
                .forEach(print);
    }
}
