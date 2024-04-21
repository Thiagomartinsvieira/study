import java.util.ArrayList;

public class Main {
    public String name;

    static String videoName = "Starting from 0 in JAVA";
    protected int salary;

    public static void main(String[] args) {
        Ser mySerAnimal = new Dog("Scooby", 2, "Luiza");
        Ser mySerHuman = new Person("Thiago", 24, "Martins");
        mySerAnimal.setName("Lucas");
        System.out.println(mySerAnimal.salutation());
        System.out.println(mySerHuman.salutation());
        System.out.println(videoName);
    }

    private void updateSalary(){
        this.salary = 400;
    }

    public int getSalary(){
        this.updateSalary();
        return this.salary;
    }
}