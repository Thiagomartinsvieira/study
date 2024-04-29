package lambdas;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public class Challenge {
    public static void main(String[] args) {
//         1 - Calcular o preço real do produto com desconto
//         2 - Imposto >= 2500 (8, 5%) / 2500 (isento)
//         3 - Frete >= 3000 (100) / < 3000 (50)
//         4 - Arrendondar para duas casas decimais
//         5 - Formatar ex R$2000,00

        Function<Product, Double> finalPrice =
                product -> product.price * (1 - product.discount);
        UnaryOperator<Double> municipalTax =
                price -> price >= 2500 ? price * 1.085 : price;
        UnaryOperator<Double> shipping =
                price -> price >= 3000 ? price + 100 : price + 50;
        UnaryOperator<Double> round =
                price -> Double.parseDouble(String.format("%.2f", price));
        Function<Double, String> format =
                price -> ("R$" + price).replace(".", ",");

        Product p = new Product("Ipad", 3221.81, 0.13);

        String price = finalPrice
                .andThen(municipalTax)
                .andThen(shipping)
                .andThen(round)
                .andThen(format)
                .apply(p);
        System.out.println("The final price is " + price);
    }
}
