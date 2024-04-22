package Fundamentals;

public class Wrappers {
    public static void main(String[] args) {

        // byte
        Byte b = 100;
        Short s = 1000;

        // Integer.parseInt(scanner.next()); // int

        Integer i = 10000;
        Long l = 1000000L;

        System.out.println(b.byteValue());
        System.out.println(s.toString());
        System.out.println(i * 3);
        System.out.println(i / 3);

        Float f = 123.10F;
        System.out.println(f);

        Double d = 1234.4578;
        System.out.println(d);

        Boolean bo = Boolean.parseBoolean("True");
        System.out.println(bo);
        System.out.println(bo.toString().toUpperCase());

        Character c = '#'; // Char
        System.out.println(c + "...");


    }
}
