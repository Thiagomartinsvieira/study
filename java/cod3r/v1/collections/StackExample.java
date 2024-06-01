package collections;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Deque<String> stack = new ArrayDeque<>();

        stack.push("Star wars");
        stack.push("Peak and Blinders");
        stack.push("American pie");

        System.out.println("Peek...");
        System.out.println(stack.peek());

        System.out.println("pop...");
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        stack.poll();
//        System.out.println(stack.pop());
    }
}
