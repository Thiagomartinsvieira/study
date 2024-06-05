package otherBasicTopics;

public class StringFunctions {
    public static void main(String[] args) {
        String original = "abcde FHGIJ abc DEFG    ";

        System.out.println("Original: " + original + "-");
        System.out.println("ToLowerCase: " + original.toLowerCase() + "-");
        System.out.println("ToUpperCase: " + original.toUpperCase() + "-");
        System.out.println("Trim: " + original.trim() + "-");
        System.out.println("Substring(2)" + original.substring(2));
        System.out.println("Substring(2,9)" + original.substring(2, 9));
        System.out.println("Replace('a', 'x')" + original.replace('a', 'x'));
        System.out.println(original.replace("abc", "xy"));
        System.out.println(original.indexOf("bc"));
        System.out.println(original.lastIndexOf("bc"));

        System.out.println("------------------------------------------");

        String s = "potato apple lemon";

        String[] vect = s.split(" ");
        String word1 = vect[0];
        String word2 = vect[1];
        String word3 = vect[2];

        System.out.println(word1);
        System.out.println(word2);
        System.out.println(word3);
    }
}
