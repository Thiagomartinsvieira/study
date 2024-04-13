package functionTest02;

public class operations {
   public static String counter(int i, int f){
        String s = "";
        for(int c = i; c <= f; c++){
            s += c + " ";
        }
        return s;
    }
}
