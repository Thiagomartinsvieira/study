package test.inherintage;

import infra.DAO;
import model.Inheritage.ScholarshipStudent;
import model.Inheritage.Student;

public class NewStudent {
    public static void main(String[] args) {
        DAO<Student> studentDAO = new DAO<>();

        Student student1 = new Student(123L, "Thiago");

        ScholarshipStudent student2 = new ScholarshipStudent(345L, "Melina", 1000);


        studentDAO.includeAtomic(student1);
        studentDAO.includeAtomic(student2);

        studentDAO.close();
    }
}
