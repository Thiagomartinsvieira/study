package lambdas;

import java.util.function.UnaryOperator;

public class OperadorUnario {
    public static void main(String[] args) {

        UnaryOperator<Integer> moreTwo = n -> n + 2;
        UnaryOperator<Integer> multTwo = n -> n * 2;
        UnaryOperator<Integer> squared = n -> n * n;

        int result1 = moreTwo.andThen(multTwo).andThen(squared).apply(0);

        System.out.println(result1);

        int result2 = squared.compose(multTwo).compose(moreTwo).apply(0);

        System.out.println(result2);

    }
}
