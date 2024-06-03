package oo.heritage;

public class TestDrive {
    public static void main(String[] args) {
        Car c = new Polo();
        c.speedUp();
        System.out.println(c.getActualSpeed());

        c = new Ferrari();
        c.speedUp();
        System.out.println(c.getActualSpeed());
    }
}
