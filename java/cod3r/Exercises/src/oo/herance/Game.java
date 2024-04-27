package oo.herance;

public class Game {
    public static void main(String[] args) {

        Player p1 = new Player();
        p1.x = 10;
        p1.y = 10;

        p1.toWalk(Direction.NORTH);
        p1.toWalk(Direction.EAST);
        p1.toWalk(Direction.NORTH);
        p1.toWalk(Direction.WEST);

        System.out.println(p1.x);
        System.out.println(p1.y);
    }
}
