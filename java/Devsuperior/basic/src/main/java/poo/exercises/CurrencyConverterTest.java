package poo.exercises;

import java.util.Scanner;

public class CurrencyConverterTest {
    public static void main(String[] args) {
        CurrencyConverter currencyConverter = new CurrencyConverter();

        Scanner scanner = new Scanner(System.in);

        System.out.print("What is the dollar price? ");
        currencyConverter.dollarPrice = scanner.nextDouble();

        System.out.print("How many dollars will be bought? ");
        currencyConverter.dollarToBuy = scanner.nextDouble();

        double amountInReais = currencyConverter.convertToReais(currencyConverter.dollarToBuy);
        System.out.println("Amount to be paid in reais: " + amountInReais);

        scanner.close();
    }
}
