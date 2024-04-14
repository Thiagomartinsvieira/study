package Class04;

import com.sun.source.tree.BreakTree;

public class Pen {
    private String model;
    private  float tip;
    private String color;
    private boolean covered;
    private boolean uncovered;

    public Pen(String m, String c, float t) { // this is a constructor method
        this.model = m;
        this.color = c;
        this.tip = t;
        this.cover();

    }

    public String getModel(){
        return this.model;
    }

    public void setModel(String m){
        this.model = m;
    }

    public float getTip() {
        return  this.tip;
    }

    public void setTip(float p){
        this.tip = p;
    }

    public void cover(){
        this.covered = true;
    }

    public void uncover(){
        this.uncovered = false;
    }

    public void status(){
        System.out.println("About a Pen");
        System.out.println("Model " + this.getModel());
        System.out.println("Tip " + this.getTip());
        System.out.println("Color: " + this.color);
        System.out.println("Covered: " + this.covered);
    }

}
