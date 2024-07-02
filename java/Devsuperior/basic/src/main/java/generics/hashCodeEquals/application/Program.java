package generics.hashCodeEquals.application;

import generics.hashCodeEquals.entities.Client;

public class Program {
    public static void main(String[] args) {
        Client c1 = new Client("Dayane", "dayane@email.com");
        Client c2 = new Client("Dayane", "dayane@email.com");
        Client c3 = new Client("Thiago", "thiago@email.com");

        String s1 = "Test";
        String s2 = "Test";

        System.out.println(c1.hashCode());
        System.out.println(c2.hashCode());
        System.out.println(c1.equals(c2));
        System.out.println(c1 == c2);
        System.out.println(s1 == s2);
    }
}
