package streams;

import java.util.function.UnaryOperator;

public class Ultilities {

    private Ultilities(){

    }


    public final static UnaryOperator<String> uppercase =
            n -> n.toUpperCase();
    public final static UnaryOperator<String> firstLetter =
            n -> n.charAt(0) + "";
    public static String shout(String n){
        return n + "!!! ";
    }
}
