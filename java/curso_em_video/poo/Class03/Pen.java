package Class03;

public class Pen {
   public String model;
    public String color;
    private float tip;
    protected int charge;
    private boolean covered;

    public void status (){
        System.out.println("Model: " + this.model);
        System.out.println("A pen " + this.color);
        System.out.println("Is covered ? " + this.covered);
        System.out.println("Tip:  " + this.tip);
        System.out.println("charge: " + this.charge);
    }

    public void scribble() {
        if(covered) {
            System.out.println("Error, I can`t doodle");
        } else {
            System.out.println("I am dooling");
        }
    }

    public void  cover() {
        this.covered = true;
    }

    public void uncover() {
        this.covered = false;
    }
}
