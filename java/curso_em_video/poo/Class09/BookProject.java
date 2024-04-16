package Class09;

public class BookProject {
    public static void main(String[] args) {
        Person[] persons = new Person[2];
        Book[] books = new Book[3];

        persons[0] = new Person("Thiago", 22, 'M');
        persons[1] = new Person("Luiza", 21, 'F');

        books[0] = new Book("Learn Java", "Guanabara", 300, persons[0]);
        books[1] = new Book("Poo easy", "Pedrinho", 500, persons[1]);
        books[2] = new Book("Advance Java", "Saulo", 300, persons[0]);

        books[0].open();
        books[0].leafThrough(200);
        System.out.println(books[0].details());
    }
}