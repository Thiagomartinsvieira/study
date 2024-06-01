package classe;

public class ValueVsReference {
    static void byValue(double number){
        number++;
    }

    static void byReference(Product product){
        product.price++;
    }

    public static void main(String[] args) {
        double number = 1;
        final Product product = new Product("Pen", 1);
        Product product2 = product;
        product2.name = "Pencil";

        byValue(number);
        byReference(product);

        System.out.println(number);
        System.out.println(product.price);
        System.out.println(product.name);
    }
}
