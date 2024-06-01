package collections;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class BehavedSet {
    public static void main(String[] args) {
        Set<String> approved = new TreeSet<>();
        approved.add("Dayane");
        approved.add("Thiago");
        approved.add("Lucas");

        for (Object name: approved) {
            System.out.println(name);
        }
    }
}
