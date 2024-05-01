package exception.personalizedA;

import exception.Student;

public class ValidationsTest {
    public static void main(String[] args) {

        try {
            Student student = new Student("Ana", 7);
            validate.student(student);

            validate.student(null);
        } catch (EmptyStringException | NumberOutRangeException |
                 IllegalArgumentException e) {
            System.out.println(e.getMessage());;
        }

        System.out.println("Finish!");

    }
}
