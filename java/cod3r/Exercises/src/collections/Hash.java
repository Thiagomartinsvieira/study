package collections;

import java.util.HashSet;

public class Hash {
    public static void main(String[] args) {

        HashSet<User> users = new HashSet<User>();

        users.add(new User("Ana"));
        users.add(new User("William"));
        users.add(new User("Gabriel"));

        boolean result = users.contains(new User("Gabriel"));
        System.out.println(result);
    }
}
