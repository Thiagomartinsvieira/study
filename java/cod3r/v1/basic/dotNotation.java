package basic;

public class dotNotation {
    public static void main(String[] args) {
        String s = "Good morning ?".toUpperCase()
                .replace("?", "Thiago")
                        .concat("!");

        System.out.printf(s);
    }
}
