package collections;

import java.util.ArrayList;

public class List {
    public static void main(String[] args) {
        ArrayList<User> list = new ArrayList<>();

        User u1 = new User("Ana");
        list.add(u1);

        list.add(new User("Bia"));
        list.add(new User("Manu"));
        list.add(new User("Kamila"));
        list.add(new User("Giulia"));
        list.add(new User("Giulia"));

        System.out.println(list.get(3));

        list.remove(1);

        System.out.println(">>>> " + list.remove(1));
        System.out.println(list.remove(new User("Giulia")));
        System.out.println(list.remove(new User("Giulia")));
        System.out.println(list.remove(new User("Giulia")));

        System.out.println("has ? " + list.contains(new User("Kamila")));
        System.out.println("has ? " + list.contains(u1));

        for (User u: list){
            System.out.println(u);
        }
    }
}
