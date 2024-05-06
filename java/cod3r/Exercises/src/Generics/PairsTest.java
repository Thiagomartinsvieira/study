package Generics;

public class PairsTest {
    public static void main(String[] args) {

        Pairs<Integer, String> tenderResult = new Pairs<>();

        tenderResult.add(1, "Maria");
        tenderResult.add(2, "Priscilla");
        tenderResult.add(3, "Joana");
        tenderResult.add(4, "Vitoria");
        tenderResult.add(2, "Amanda");


        System.out.println(tenderResult.getValue(1));
        System.out.println(tenderResult.getValue(4));
        System.out.println(tenderResult.getValue(2));
    }
}
