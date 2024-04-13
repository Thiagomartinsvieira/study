package Class02;

public class Pen {
    String model;
    String color;
    float tip;
    int charge;
    boolean covered;

    void status (){
        System.out.println("Model: " + this.model);
        System.out.println("A pen " + this.color);
        System.out.println("Is covered ? " + this.covered);
        System.out.println("Tip:  " + this.tip);
        System.out.println("charge: " + this.charge);
    }

    void scribble() {
        if(covered) {
            System.out.println("Error, I can`t doodle");
        } else {
            System.out.println("I am dooling");
        }
    }

    void  cover() {
        this.covered = true;
    }

    void uncover() {
        this.covered = false;
    }
}
