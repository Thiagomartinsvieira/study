package collections;

import java.util.HashMap;
import java.util.Map;

public class Mapa {
    public static void main(String[] args) {

        Map<Integer, String> users = new HashMap<>();

        users.put(1, "Roberto");
        users.put(20, "Alessandra");
        users.put(3, "Raquel");
        users.put(4, "Rebeca");

        System.out.println(users.size());
        System.out.println(users.isEmpty());

        System.out.println(users.keySet());
        System.out.println(users.values());
        System.out.println(users.entrySet());

        System.out.println(users.containsKey(20));
        System.out.println(users.containsKey("Rebeca"));

        System.out.println(users.get(4));
        System.out.println(users.remove(1));
        System.out.println(users.remove(4, "Gustavo"));

        for (int key: users.keySet()){
            System.out.println(key);
        }

        for (String value: users.values()){
            System.out.println(value);
        }

        for (Map.Entry<Integer, String> register: users.entrySet()){
            System.out.print(register.getKey() + " ");
            System.out.println(register.getValue());
        }
    }
}
