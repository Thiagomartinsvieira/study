package Class10;

public class PersonProject {
    public static void main(String[] args) {
        // Main program
        Person p1 = new Person();
        Student p2 = new Student();
        Professor p3 = new Professor();
        Employee p4 = new Employee();

        p1.setName("Pedro");
        p2.setName("Amanda");
        p3.setName("Claudio");
        p4.setName("Fabiana");

        p1.setSex("M");
        p2.setSex("F");

        p4.setAge(18);
        p3.setAge(25);

        p2.setCourse("JAVA");
        p3.setWage(2500.75f);
        p4.setSector("ADM");

//        p3.receiveARaise(1800.20f);
//        p4.changeWork();
//        p1.cancelMatr();

        System.out.println(p1.toString());
        System.out.println(p2.toString());
        System.out.println(p3.toString());
        System.out.println(p4.toString());
    }
}
