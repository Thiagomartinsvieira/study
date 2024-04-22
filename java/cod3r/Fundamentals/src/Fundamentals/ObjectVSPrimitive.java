package Fundamentals;

public class ObjectVSPrimitive {
    public static void main(String[] args) {

        String s = new String("Text");
        s.toUpperCase();

        // Wrappers are the object version of primitive types!
        int a = 123;
        System.out.println(a);
    }
}
