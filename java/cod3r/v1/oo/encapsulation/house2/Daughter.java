package oo.encapsulation.house2;

import oo.encapsulation.house1.FatherInLaw;
import oo.encapsulation.house1.MotherInLaw;

public class Daughter extends MotherInLaw {
    String coupleSecret = "My husband is about to  be fired";

    public static void main(String[] args) {
        Daughter myself = new Daughter();
        System.out.println("My parents don't know... " + myself.coupleSecret);

//        SonInLaw myLove = new SonInLaw();
//        System.out.println(myLove.secret);

        FatherInLaw fatherInLaw = new FatherInLaw();
        System.out.println(fatherInLaw.likeBeer);

        MotherInLaw mom = new MotherInLaw();
        System.out.println(myself.familySecret);
    }
}
