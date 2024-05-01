package exception.personalizedB;

import exception.Student;

public class validate {

    private validate(){

    }

    public static void student(Student student) throws EmptyStringException,
            NumberOutRangeException {
        if (student == null){
            throw new IllegalArgumentException("The student is null!");
        }

        if (student.name == null || student.name.trim().isEmpty()){
            throw new EmptyStringException("Name");
        }

        if(student.grade < 0 || student.grade > 10){
            throw new EmptyStringException("Grade");
        }

    }
}
