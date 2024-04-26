package oo.composition;

public class CourseTest {
    public static void main(String[] args) {
        Student student1 = new Student("João");
        Student student2 = new Student("Maria");
        Student student3 = new Student("Bia");

        Course course1 = new Course("Java");
        Course course2 = new Course("HTML and CSS");
        Course course3 = new Course("React Native");

        course1.addStudent(student1);
        course1.addStudent(student2);

        course2.addStudent(student1);
        course2.addStudent(student3);

        student1.addCourse(course3);
        student2.addCourse(course3);

        for (Student student: course1.students){
            System.out.println("I am enrolled in course " + course3.name + " ");
            System.out.println(" and my name is " + student.name);
        }

        System.out.println(student1.courses.get(0).students);

        Course courseFound = student1.getCoursePerName("java");

        if(courseFound != null){
            System.out.println(courseFound.name);
            System.out.println(courseFound.students);
        }
    }

}
