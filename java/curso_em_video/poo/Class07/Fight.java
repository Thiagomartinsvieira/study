package Class07;

import java.util.Objects;
import java.util.Random;

public class Fight {
    // Atributes
    private Figther challenged;
    private Figther challenging;
    private int rounds;
    private boolean approved;

    // methods
    public void scheduleFight(Figther f1, Figther f2){
        if (f1.getCategory().equals(f2.getCategory())
                && f1 != f2) {
                this.approved = true;
                this.challenged = f1;
                this.challenging = f2;
        } else {
            this.approved = false;
            this.challenging = null;
            this.challenged = null;
        }
    }
    public void fight(){
        if(this.approved){
            System.out.println("### CHALlANGED ###");
            this.challenged.present();
            System.out.println("### CHALLENGING ###");
            this.challenging.present();

            Random random =  new Random();
            int winner = random.nextInt(3); // 0, 1, or 2
            System.out.println("======== Fight Result ==========");
            switch (winner) {
                case 0:
                    System.out.println("DRAW");
                    this.challenged.drawFight();
                    this.challenging.drawFight();
                    break;
                case 1:
                    System.out.println("Victory of " + this.challenged.getName());
                    this.challenged.winFight();
                    this.challenging.loseFight();
                    break;
                case 2:
                    System.out.println("Victory of " + this.challenging.getName());
                    this.challenged.loseFight();
                    this.challenging.winFight();
                    break;
            }
            System.out.println("============");
        } else {
            System.out.println("The fight cannot happen");
        }
    }

    //Especial methods
    public Figther getChallenged() {
        return challenged;
    }

    public void setChallenged(Figther challenged) {
        this.challenged = challenged;
    }

    public Figther getChallenging() {
        return challenging;
    }

    public void setChallenging(Figther challenging) {
        this.challenging = challenging;
    }

    public int getRounds() {
        return rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}
