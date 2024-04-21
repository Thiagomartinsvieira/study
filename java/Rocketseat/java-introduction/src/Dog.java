public class Dog extends Ser {

    String owner;

    public Dog(String name, int age, String owner) {
        super(name, age);
        this.owner = owner;
    }

    @Override
    public String salutation(){
        return "au au!";
    }
}
