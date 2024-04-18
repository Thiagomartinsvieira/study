package Class12;

public class Bird extends Animal{
    private String featherColor;
    @Override
    public void move() {
        System.out.println("Flying");
    }

    @Override
    public void eat() {
        System.out.println("Eating fruits");
    }

    @Override
    public void makeSound() {
        System.out.println("Bird sound");
    }
    public void makeANest(){
        System.out.println("Building nest");
    }
}
