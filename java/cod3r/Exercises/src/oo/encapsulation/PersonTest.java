package oo.encapsulation;

public class PersonTest {
    public static void main(String[] args) {
        Person p1 = new Person("Jussara", "Mendes", -27);
        p1.setAge(230);

        System.out.println("Person has " + p1.getAge()); // read
        System.out.println(p1); // toString
        System.out.println(p1.getCompletedName());
    }
}
