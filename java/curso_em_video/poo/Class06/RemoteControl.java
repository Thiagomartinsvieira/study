package Class06;

public class RemoteControl implements Controller {
    // Atributes
    private int volume;
    private boolean on;
    private boolean playing;

    // Especial methods

    public RemoteControl() {
        this.volume = 50;
        this.on = false;
        this.playing = false;
    }

    private int getVolume() {
        return volume;
    }

    private void setVolume(int volume) {
        this.volume = volume;
    }

    private boolean getOn() {
        return on;
    }

    private void setOn(boolean on) {
        this.on = on;
    }

    private boolean getPlaying() {
        return playing;
    }

    public void setPlaying(boolean playing) {
        this.playing = playing;
    }

    @Override
    public void on() {
        this.setOn(true);
    }

    @Override
    public void off() {
        this.setOn(false);
    }

    @Override
    public void openMenu() {
        System.out.println("-------MENU--------");
        System.out.println("Is on ? " + this.getOn());
        System.out.println("is playing " + this.getPlaying());
        System.out.print("Volume: " + this.getVolume());
        for (int i = 0; i<= this.getVolume(); i+=10){
            System.out.print("|");
        }
    }

    @Override
    public void closeMenu() {
        System.out.println("Closing menu!");
    }

    @Override
    public void moreVOlume() {
        if(this.getOn()){
            this.setVolume(this.getVolume() + 5);
        } else {
            System.out.println("Impossible more volume");
        }
    }

    @Override
    public void lessVolume() {
        if(this.getOn()){
            this.setVolume(this.getVolume() - 5);
        } else {
            System.out.println("Impossible less volume");
        }
    }

    @Override
    public void onMute() {
        if(this.getOn() && this.getVolume() > 0){
            this.setVolume(0);
        }
    }

    @Override
    public void offMute() {
        if(this.getOn() && this.getVolume() == 0){
            this.setVolume(50);
        }
    }

    @Override
    public void play() {
        if(this.getOn() && !(this.getPlaying())){
            this.setPlaying(true);
        } else {
            System.out.println("I couldn't reproduce");
        }
    }

    @Override
    public void pause() {
        if(this.getOn() && this.getPlaying()){
            this.setPlaying(false);
        } else {
            System.out.println("I couldn't pause");
        }
    }
    // Abstract methods

}
