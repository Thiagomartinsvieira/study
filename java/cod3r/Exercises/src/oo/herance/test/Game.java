package oo.herance.test;

import oo.herance.Direction;
import oo.herance.Hero;
import oo.herance.Monster;

public class Game {
    public static void main(String[] args) {

        Monster monster = new Monster();
        monster.x = 10;
        monster.y = 10;

        Hero hero = new Hero(10, 11);


        System.out.println("Monster has => " + monster.getLife());
        System.out.println("Hero has => " + hero.getLife());

        monster.attack(hero);
        hero.attack(monster);

        monster.attack(hero);
        hero.attack(monster);

        monster.toWalk(Direction.NORTH);
        monster.attack(hero);
        hero.attack(monster);

        System.out.println("Monster has => " + monster.getLife());
        System.out.println("Hero has => " + hero.getLife());


    }
}
