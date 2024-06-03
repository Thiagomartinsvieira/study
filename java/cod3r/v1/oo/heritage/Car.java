package oo.heritage;

public class Car {
    protected int MAXIMUM_SPEED = 200;
    private int actualSpeed = 0;

    protected final void speedUpMore(int speed) {
        if (actualSpeed + speed > MAXIMUM_SPEED) {
            actualSpeed = MAXIMUM_SPEED;
        } else {
            actualSpeed += speed;
        }
    }

    protected final void brakeMore(int speed ) {
        if (actualSpeed - actualSpeed < 0) {
            actualSpeed = 0;
        } else {
            actualSpeed -= speed;
        }
    }

    public void speedUp() {
        speedUpMore(5);
    }

    public void brake() {
        brakeMore(5);
    }

    public int getActualSpeed() {
        return actualSpeed;
    }
}


