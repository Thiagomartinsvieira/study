package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Match {
    public static void main(String[] args) {
        Student s1 = new Student("Ana", 7.1);
        Student s2 = new Student("Iza", 7.1);
        Student s3 = new Student("Luna", 8.1);
        Student s4 = new Student("Gabi", 10);

        List<Student> students = Arrays.asList(s1, s2, s3, s4);

        Predicate<Student> approved = s -> s.grade >= 7;
        Predicate<Student> disapproved = approved.negate();

        System.out.println(students.stream().allMatch(approved));
        System.out.println(students.stream().anyMatch(approved));
        System.out.println(students.stream().noneMatch(disapproved));
    }
}
