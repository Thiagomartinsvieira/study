package Generics;

public class Box<TYPE> {
    private TYPE thing;
    public void save(TYPE thing){
        this.thing = thing;
    }

    public TYPE open(){
        return thing;
    }
}
