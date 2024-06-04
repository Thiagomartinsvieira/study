package sequencial.exercises;

public class DataOutput {
    public static void main(String[] args) {

        String product1 = "Computer";
        String product2 = "Office desk";
        int age = 19;
        int code = 5290;
        char gender = 'F';

        double price1 = 2100.0;
        double price2 = 650.50;
        double measure = 53.123123;

        System.out.printf("Products:\n %s, which price is $ %.2f\n %s, which price is $ %.2f\n\n",
                product1, price1, product2, price2);
        System.out.printf("Record: %d years old, code %d and gender: %c\n",
                age, code, gender);
        System.out.printf("Measure with eight decimal places: %.8f\n", measure);
        System.out.printf("Rounded (three decimal places): %.3f\n", measure);
        System.out.printf("US decimal point: %.3f\n", measure);
    }
}
