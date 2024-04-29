package lambdas;

import java.util.function.Predicate;

public class PredicatedComposition {
    public static void main(String[] args) {

        Predicate<Integer> isEven = num -> num % 2 == 0;
        Predicate<Integer> isThreeDigits =
                num -> num >= 100 && num <= 999;

        System.out.println(isEven.and(isThreeDigits).negate().test(123));
        System.out.println(isEven.or(isThreeDigits).test(123));
    }
}
