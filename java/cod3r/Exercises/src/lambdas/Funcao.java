package lambdas;

import java.util.function.Function;

public class Funcao {
    public static void main(String[] args) {
        Function<Integer, String> evenOrOdd =
                num -> num % 2 == 0 ? "Even" : "Odd";

        Function<String, String> theResultIs =
                value -> "The result is: " + value;

        Function<String, String> exited =
                value -> value + "!!!";

        Function<String, String> question =
                value -> value + "???";

        String finalResult1 = evenOrOdd
                        .andThen(theResultIs)
                        .andThen(exited)
                        .apply(32);

        System.out.println(finalResult1);

        String finalResult2 = evenOrOdd
                .andThen(theResultIs)
                .andThen(question)
                .apply(33);

        System.out.println(finalResult2);

        System.out.println(evenOrOdd.apply(32));
    }
}
