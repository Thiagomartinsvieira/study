public class Person extends Ser {

    String lastName;
    public Person(String name, int age, String lastName){
        super(name, age);
        this.lastName = lastName;
    }
    void createMain(){
        Main myMain = new Main();
        System.out.println(myMain.name);
        System.out.println(myMain.salary);
        this.age = 24;
    }

    @Override
    public String salutation(){
        return "Hello, my name is " + this.name;
    }
}
