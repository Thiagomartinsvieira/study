package oo.herance.challenge;

public interface Lux {
    public void onAir();
    abstract void offAir();

    default int airSpeed(){
        return 1;
    }
}
