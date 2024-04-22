package Fundamentals;

public class StringType {
    public static void main(String[] args) {
        System.out.println("Hello people".charAt(2));

        String s = "Good afternoon!";
        System.out.println(s.concat("!!!"));
        System.out.println(s + "!!!");
        System.out.println(s.startsWith("Good"));
        System.out.println(s.toLowerCase().startsWith("good"));
        System.out.println(s.toUpperCase().endsWith("AFTERNOON!"));
        System.out.println(s.length());
        System.out.println(s.equals("Good afternoon!"));
        System.out.println(s.equalsIgnoreCase("GOOD AFTERNOON!"));

        var name = "Thiago";
        var lastName = "Vieira";
        var age = 24;
        var salary = 2250.212;

        System.out.println("Name: " + name + " Last name: " + lastName + "\n\n");

        System.out.printf("Name: %s %s have %d and receive R$%.2f",
                name, lastName, age, salary);

        String sentence = String.format("\nName: %s %s have %d and receive R$%.2f",
                name, lastName, age, salary);

        System.out.println(sentence);

        System.out.println("Any sentence".contains("sent"));
        System.out.println("Any sentence".indexOf("sent"));
        System.out.println("Any sentence".substring(6));
        System.out.println("Any sentence".substring(3, 10));
    }
}
