package stringComparison;

public class StringComparison {
    public static void main(String[] args) {
        String name1 = "Thiago";
        String name2 = "Thiago";
        String name3 = new String("Thiago");
        String res;
        res = (name1.equals(name3)) ? "same" : "different";
        System.out.println(res);
    }
}
