package lambdas;

import java.util.function.BiFunction;
import java.util.function.BinaryOperator;
import java.util.function.Function;

public class OperadorBinario {
    public static void main(String[] args) {
        BinaryOperator<Double> media = (n1, n2) -> (n1 + n2) / 2;
        System.out.println(media.apply(9.8, 5.7));

        BiFunction<Double, Double, String> result = (n1, n2) -> {
            double finalNote = (n1 + n2) / 2;
            return finalNote >= 7 ? "Approved" : "Disapproved";
        };

        System.out.println(result.apply(9.7, 4.1));

        Function<Double, String> concept = m -> m >= 7 ? "Approved" : "Disapproved";

        System.out.println(media.andThen(concept).apply(9.5, 5.1));
    }
}
