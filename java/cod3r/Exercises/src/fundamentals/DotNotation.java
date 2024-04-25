package Fundamentals;

public class DotNotation {
    public static void main(String[] args) {

        String s = "Good Morning X";
        s = s.replace("X", "Sr");
        s = s.toUpperCase();
        s = s.concat("!!!");

        System.out.println(s);

        String x = "Thiago".toUpperCase();
        System.out.println(x);

        String y = "Good Morning X"
                .replace("X", "Lucas")
                .toUpperCase()
                .concat(" how are you? ");
        System.out.println(y);

        // Primitive types does not have a dot operator "."
        int a = 3;
        System.out.println(a);
    }
}
