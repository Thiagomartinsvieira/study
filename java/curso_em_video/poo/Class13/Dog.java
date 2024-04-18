package Class13;

import java.util.Objects;

public class Dog extends Wolf {
    @Override
    public void makeSound(){
        System.out.println("Au! Au! Au!");
    }

    public void react(String sentence){
        if(Objects.equals(sentence, "Take food") || Objects.equals(sentence, "Hello")){
            System.out.println("Shake and bark");
        } else {
            System.out.println("Growl");
        }
    }

    public void react(int hour, int minutes){
        if (hour < 12){
            System.out.println("Shake");
        } else  if (hour >= 18){
            System.out.println("Ignore");
        } else {
            System.out.println("Shake and bark");
        }
    }

    public void react(boolean owner){
        if(owner){
            System.out.println("Shake");
        } else {
            System.out.println("Growl and bark");
            this.makeSound();
        }
    }

    public void react(int age, float width){
        if (age < 5){
            if (width < 10){
                System.out.println("Shake");
            } else {
                System.out.println("Growl");
            }
        } else {
            if (width < 10){
                System.out.println("Growl");
            } else {
                System.out.println("Ignore");
            }
        }
    }

}
