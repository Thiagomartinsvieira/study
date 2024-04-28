package oo.herance;

public class Player {
    int life = 100;
    int x;
    int y;

    Player(int x , int y){
        this.x = x;
        this.y = y;
    }

    boolean attack(Player oponent){

        int deltX = Math.abs(x - oponent.x);
        int deltY = Math.abs(y - oponent.y);

        if(deltX == 0 && deltY == 1){
            oponent.life -= 10;
            return true;
        } else if (deltX == 1 && deltY == 0) {
            oponent.life -= 10;
            return true;
        } else {
            return false;
        }
    }
    
    boolean toWalk(Direction direction){
        switch (direction){
            case NORTH:
                y--;
                break;
            case EAST:
                x++;
                break;
            case SOUTH:
                y++;
                break;
            case WEST:
                x--;
                break;
        }

        return true;
    }
}
