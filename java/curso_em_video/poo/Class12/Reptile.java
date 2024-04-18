package Class12;

public class Reptile extends Animal{
        private String scanCOlor;

    @Override
    public void move() {
        System.out.println("Crawling");
    }

    @Override
    public void eat() {
        System.out.println("Eating vegetables");
    }

    @Override
    public void makeSound() {
        System.out.println("Reptile sound");
    }

    public String getScanCOlor() {
        return scanCOlor;
    }

    public void setScanCOlor(String scanCOlor) {
        this.scanCOlor = scanCOlor;
    }
}
