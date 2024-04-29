package lambdas;

import java.util.Arrays;
import java.util.List;
import java.util.function.Supplier;

public class Fornecedor {
    public static void main(String[] args) {

        Supplier<List<String>> oneList =
                () -> Arrays.asList("Ana", "Bia", "Teo", "Gui");
        System.out.println(oneList.get());
    }
}
