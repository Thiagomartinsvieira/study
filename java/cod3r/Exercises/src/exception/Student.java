package exception;

import java.util.Objects;

    public class Student {

    public final String name;
    public final double grade;
    public final boolean goodBehavior;

    public Student(String name, double grade) {
        this(name, grade, true);
    }

    public Student(String name, double grade, boolean goodBehavior) {
        this.name = name;
        this.grade = grade;
        this.goodBehavior = goodBehavior;
    }

    public String toString(){
        return name + " has a rating " + grade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Double.compare(grade, student.grade) == 0 && goodBehavior == student.goodBehavior && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, grade, goodBehavior);
    }
}
