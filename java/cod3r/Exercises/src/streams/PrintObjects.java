package streams;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

public class PrintObjects {
    public static void main(String[] args) {

        List<String> approveds = Arrays.asList("Lu", "Thi", "Lucas", "Ana");

        System.out.println("Using forEach...");
        for(String name: approveds){
            System.out.println(name);
        }

        System.out.println("\nUsing Iterator...");
        Iterator<String> iterator = approveds.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }

        System.out.println("\nUsing Stream...");
        Stream<String> stream = approveds.stream();
        stream.forEach(System.out::println);
    }
}
