package Class12;

public class Dog extends Mammal{
    @Override
    public void move(){
        System.out.println("Walking");
    }
    @Override
    public void makeSound(){
        System.out.println("Au< AU Au!");
    }
}
