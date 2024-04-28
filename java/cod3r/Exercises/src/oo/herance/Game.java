package oo.herance;

public class Game {
    public static void main(String[] args) {

        Monster monster = new Monster();
        monster.x = 10;
        monster.y = 10;

        Hero hero = new Hero(10, 11);


        System.out.println("Monster has => " + monster.life);
        System.out.println("Hero has => " + hero.life);

        monster.attack(hero);
        hero.attack(monster);

        monster.attack(hero);
        hero.attack(monster);

        monster.toWalk(Direction.NORTH);
        monster.attack(hero);
        hero.attack(monster);

        System.out.println("Monster has => " + monster.life);
        System.out.println("Hero has => " + hero.life);


    }
}
