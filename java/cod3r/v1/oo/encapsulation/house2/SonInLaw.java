package oo.encapsulation.house2;

import oo.encapsulation.house1.FatherInLaw;
import oo.encapsulation.house1.MotherInLaw;

public class SonInLaw {
    private String secret = "My Mother-in-law speaks a lot!";

    public static void main(String[] args) {
        SonInLaw myself = new SonInLaw();
        System.out.println("i will never speak... " + myself.secret);

        Daughter myLove = new Daughter();
        System.out.println(myLove.coupleSecret);

        FatherInLaw fatherInLaw = new FatherInLaw();
        System.out.println(fatherInLaw.likeBeer);

//        MotherInLaw motherInLaw = new MotherInLaw();
//        System.out.println(motherInLaw.familySecret);

    }
}
