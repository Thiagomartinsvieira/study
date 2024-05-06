package Generics;

import javax.swing.*;

public class BoxObjectTest {
    public static void main(String[] args) {
        BoxObject boxA = new BoxObject();
        boxA.save(2.3);

        Double thingA = (Double) boxA.open();
        System.out.println(thingA);

        BoxObject boxB = new BoxObject();
        boxB.save("Hello");

        String thingB = (String) boxB.open();
        System.out.println(thingB);
    }
}
