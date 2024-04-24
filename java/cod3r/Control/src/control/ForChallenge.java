package control;

public class ForChallenge {
    public static void main(String[] args) {

        String value = "#";
        for(int i = 1; i <= 5; i++){
            System.out.println(value);
            value += "#";
        }

        System.out.println("-------------------");

        for (String v = "#"; !v.equals("######"); v += "#"){
            System.out.println(v);
        }
    }
}
