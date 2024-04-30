package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Stream;

public class CreatingStreams {
    public static void main(String[] args) {
        Consumer<String> print = System.out::print;
        Consumer<Integer> println = System.out::println;

        Stream<String> langs = Stream.of("Java ", "Lua ", "PHP ", "JS\n");
        langs.forEach(print);

        String[] moreLangs = { "Phyton ", "Lisp", "Perl ", "Go\n" };

        Stream.of(moreLangs).forEach(print);
        Arrays.stream(moreLangs).forEach(print);
        Arrays.stream(moreLangs, 1, 2).forEach(print);

        List<String> othersLangs = Arrays.asList("C ", "TS ", "Kotlin\n");
        othersLangs.stream().forEach(print);
        othersLangs.parallelStream().forEach(print);

//        Stream.generate(() -> "a").forEach(print);
        Stream.iterate(0, n -> n + 1).forEach(println);
    }
}
