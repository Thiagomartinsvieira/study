package oo.polymorphism;

public class Dinner {
    public static void main(String[] args) {
        Rice rice = new Rice();
        rice.setWeight(0.250);

        Beans beans = new Beans();
        beans.setWeight(0.280);

        IceCream iceCream = new IceCream();
        iceCream.setWeight(0.160);

        Person person = new Person(80.7);
        person.toEat(rice, beans, iceCream);

        System.out.println(person.getWeight());
    }
}
