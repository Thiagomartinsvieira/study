package streams;

import java.util.Arrays;
import java.util.List;

public class Others {
    public static void main(String[] args) {
        Student s1 = new Student("Ana", 7.1);
        Student s2 = new Student("Iza", 6.1);
        Student s3 = new Student("Luna", 8.1);
        Student s4 = new Student("Gabi", 10);
        Student s5 = new Student("Ana", 7.1);
        Student s6 = new Student("Iza", 6.1);
        Student s7 = new Student("Ste", 8.1);
        Student s8 = new Student("Maria", 10);

        List<Student> students = Arrays.asList(s1, s2, s3, s4, s5, s6, s7, s8);

        System.out.println("Distinct...");
        students.stream().distinct().forEach(System.out::println);

        System.out.println("\nSkip/Limit");
        students.stream()
                .distinct()
                .limit(2)
                .skip(1)
                .forEach(System.out::println);

        System.out.println("\nTakeWhile");
        students.stream()
                .distinct()
                .skip(2)
                .takeWhile(s -> s.grade >= 7)
                .forEach(System.out::println);
    }
}
