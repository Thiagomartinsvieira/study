package exception;

public class Basic {
    public static void main(String[] args) {

        Student s1 = null;

        try {
            printStudent(s1);
        } catch (Exception exception){
            System.out.println("An error occurred while printing");
        }


        try {
            System.out.println(7 / 0);
        } catch (ArithmeticException e) {
            System.out.println("An error occurred " +  e.getMessage());
        }

        System.out.println("Finish :)");
    }

    public static void printStudent(Student student){
        System.out.println(student.name);
    }
}
