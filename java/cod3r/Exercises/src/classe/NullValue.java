package Classe;

public class NullValue {

    public static void main(String[] args) {

        String s1 = "";
        System.out.println(s1.concat("!!!!!!!!!!"));

        Date d1 = Math.random() > .5 ? new Date() : null;

        if(d1 != null){
            d1.month = 3;
            System.out.println(d1.getDateFormatted());
        }

        String s2 = Math.random() > .5 ? "ops" : null;

        if(s2 != null){
            System.out.println(s2.concat("????"));
        }
    }
}
