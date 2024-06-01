package collections;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        queue.offer("Dayane");
        queue.offer("Lucas");
        queue.add("Bia");

        System.out.println("Peel/Element....");
        System.out.println(queue.peek());
        System.out.println(queue.element());

        System.out.println("Poll/Remove...");
        System.out.println(queue.poll());
        System.out.println(queue.remove());
        System.out.println(queue.poll());
        System.out.println(queue.poll());
        System.out.println(queue.remove());
    }
}
