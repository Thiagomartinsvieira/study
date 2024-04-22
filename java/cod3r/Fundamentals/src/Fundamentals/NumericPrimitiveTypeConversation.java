package Fundamentals;

public class NumericPrimitiveTypeConversation {
    public static void main(String[] args) {

        double a = 1; // implicit
        System.out.println(a);

        float b = (float) 1.123456888; // Explains (CAST)
        System.out.println(b);

        int c = 127;
        byte d = (byte) c;
        System.out.println(d);

        double e = 1.999999;
        int f = (int) e;
        System.out.println(f);
    }
}
