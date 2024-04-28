package oo.abstracto;

public class AbstractTest {
    public static void main(String[] args) {
        Mammal a = new Dog();
        System.out.println(a.move());
        System.out.println(a.breastfeed());
        System.out.println(a.breathe());
    }
}
