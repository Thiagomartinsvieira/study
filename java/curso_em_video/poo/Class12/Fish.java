package Class12;

public class Fish extends Animal{
    private String scanColor;

    @Override
    public void move() {
        System.out.println("Swimming");
    }

    @Override
    public void eat() {
        System.out.println("Eating algae");
    }

    @Override
    public void makeSound() {
        System.out.println("Fish not make sound");
    }

    public void blowBudbbles(){
        System.out.println("Blow bubbles");
    }

    public String getScanColor() {
        return scanColor;
    }

    public void setScanColor(String scanColor) {
        this.scanColor = scanColor;
    }
}
