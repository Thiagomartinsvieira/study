package Class11;

public class Class11 {
    public static void main(String[] args) {
//        Guest g1 = new Guest();
//        g1.setName("Paula");
//        g1.setAge(20);
//        g1.setSex("M");
//        System.out.println(g1.toString());
        Student s1 = new Student();
        s1.setName("Manoel");
        s1.setRegistration(111);
        s1.setCourse("JavaScript");
        s1.setAge(19);
        s1.setSex("M");
        s1.payMonthlyFee();
        s1.payMonthlyFee();
        Scholarship b1 = new Scholarship();
        b1.setRegistration(1212);
        b1.setName("Matheus");
        b1.setBag(12.5f);
        b1.setSex("M");
        b1.payMonthlyFee();

    }
}
