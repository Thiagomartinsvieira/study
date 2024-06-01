package collections;

import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        Map<Integer, String> approved = new HashMap<>();
        approved.put(1, "Dayane");
        approved.put(2, "Danubio");
        approved.put(3, "Bia");
        approved.put(4, "Carlos");

        System.out.println(approved.keySet());
        System.out.println(approved.values());
        System.out.println(approved.entrySet());

        approved.put(3, "Beatriz");
        System.out.println(approved.get(3));

        System.out.println(approved.containsKey(4));
        System.out.println(approved.containsValue("Bia"));

        System.out.println("Keys...");
        for (Integer code: approved.keySet()) {
            System.out.println(code);
        }

        System.out.println("Values...");
        for (String name: approved.values()) {
            System.out.println(name);
        }

        System.out.println("Values...");
        for (Map.Entry<Integer, String> register: approved.entrySet()) {
            System.out.println(register.getKey() + " " + register.getValue());
        }
    }
}
