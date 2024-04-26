package collections;

import java.util.ArrayDeque;
import java.util.Deque;

public class Stacks {
    public static void main(String[] args) {
        Deque<String> books = new ArrayDeque<>();

        books.add("Harry Potter");
        books.push("Blue lock");
        books.push("The Hobbit");

        System.out.println(books.peek());
        System.out.println(books.element());

        for (String book: books){
            System.out.println(book);
        }

        System.out.println(books.pop());
        System.out.println(books.poll());
        System.out.println(books.poll());
        System.out.println(books.poll());
        System.out.println(books.poll());
        System.out.println(books.pop());
//        System.out.println(books.remove());

//        books.size();
//        books.clear();
//        books.contains();
//        books.isEmpty();



    }
}
