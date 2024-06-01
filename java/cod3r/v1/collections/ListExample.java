package collections;

import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> approved = new ArrayList<>();
        approved.add("Dayane");
        approved.add("Pedro");
        approved.add("Maria");
        approved.add("Lucas");

        System.out.println("Get....");
        System.out.println(approved.get(1));

        System.out.println("Add...");
        System.out.println(approved.add("Dayane"));
        System.out.println("Size... " + approved.size());

        System.out.println("Remove...");
        System.out.println(approved.remove("dayane"));
        System.out.println(approved.remove("Dayane"));
        System.out.println("Size... " + approved.size());

        for (String name: approved) {
            System.out.println(name);
        }

    }
}
