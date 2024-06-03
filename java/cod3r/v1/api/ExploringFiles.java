package api;

public class ExploringFiles {
    public static void main(String[] args) {
        String name = new String("Thiago");
        name = "Dayane Vieira";

        System.out.println(name.toUpperCase());
        System.out.println(name.length());
        System.out.println(name.substring(0, 6));
        System.out.println(name.indexOf('D'));
        System.out.println(name.charAt(2));
        System.out.println(name.equalsIgnoreCase("dayane vieira"));
        System.out.println(name.startsWith("Day"));
        System.out.println(name.isEmpty());
        System.out.println(name.concat("!").concat("!"));

        System.out.println(name);

        name = name.toUpperCase().substring(0, 6).concat("is nice!");
        System.out.println(name);
//        name.
    }
}
