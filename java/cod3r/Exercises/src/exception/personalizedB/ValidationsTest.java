package exception.personalizedB;

import exception.Student;

public class ValidationsTest {
    public static void main(String[] args) throws EmptyStringException, NumberOutRangeException {

        try {
            Student student = new Student("Ana", 7);
            validate.student(student);

            validate.student(null);
        } catch (EmptyStringException | NumberOutRangeException |
                 IllegalArgumentException e) {
            System.out.println(e.getMessage());;
        }

        validate.student(null);

        System.out.println("Finish!");

    }
}
