package Generics;

public class BoxIntTest {
    public static void main(String[] args) {
        BoxInt boxA = new BoxInt();
        boxA.save(123);

        Integer thingA = boxA.open();
        System.out.println(thingA);
    }
}
