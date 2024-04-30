package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class Filter {
    public static void main(String[] args) {
        Student s1 = new Student("Ana", 7.8, true);
        Student s2 = new Student("Bia", 8.8, false);
        Student s3 = new Student("Carlos", 5.5, false);
        Student s4 = new Student("Pedro", 6.4, true);

        List<Student> students = Arrays.asList(s1, s2, s3, s4);

        Predicate<Student> approved = s -> s.grade >= 7;
        Predicate<Student> goodBehavior = g -> g.goodBehavior;
        Function<Student, String> greet =
                s -> "Congratulations " + s.name + " You were approved";

        students.stream()
                .filter(approved)
                .filter(goodBehavior)
                .map(greet)
                .forEach(System.out::println);
    }
}
