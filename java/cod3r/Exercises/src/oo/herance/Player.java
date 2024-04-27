package oo.herance;

public class Player {
    int x;
    int y;
    
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
