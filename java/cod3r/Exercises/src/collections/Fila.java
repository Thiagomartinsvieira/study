package collections;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<>();

        queue.add("Bia");
        queue.offer("Bia");
        queue.add("Lucas");
        queue.offer("Kamila");
        queue.add("Rafaela");
        queue.offer("Neymar");

        System.out.println(queue.peek());
        System.out.println(queue.peek());
        System.out.println(queue.element());
        System.out.println(queue.element());

//        queue.size();
//        queue.clear();
//        queue.isEmpty();

        System.out.println(queue.poll());
        System.out.println(queue.remove());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.remove());

//        queue.contains(...);
    }
}
