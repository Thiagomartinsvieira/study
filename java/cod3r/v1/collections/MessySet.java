package collections;

import java.util.HashSet;
import java.util.Set;

public class MessySet {
    public static void main(String[] args) {
        Set messy = new HashSet();
        messy.add('a');
        messy.add("text");
        messy.add(1);
        messy.add(3.14);
        messy.add(false);

        System.out.println("Add...");
        System.out.println(messy.add(1));
        System.out.println(messy.add(10));
        System.out.println("Size..." + messy.size());

        System.out.println("Remove...");
        System.out.println(messy.remove("a"));
        System.out.println(messy.remove('a'));
        System.out.println("Size..." + messy.size());

        System.out.println("Contains...");
        System.out.println(messy.contains('a'));
        System.out.println(messy.contains(1));

        Set nums = new HashSet();
        nums.add(1);
        nums.add(2);
        nums.add(3);

        // Messy.addAll(nums)
        messy.retainAll(nums);

        System.out.println("Size...");
        System.out.println(messy.size());

        messy.clear();
        System.out.println(messy.isEmpty());
    }
}
