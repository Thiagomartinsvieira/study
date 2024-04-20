package YoutubeProject;

public class Views {
    private Gafanhoto spectator;
    private Video movie;

    public Views(Gafanhoto spectator, Video movie) {
        this.spectator = spectator;
        this.movie = movie;
        this.spectator.setTotWatched(this.spectator.getTotWatched() + 1);
        this.movie.setViews(this.movie.getViews() + 1);
    }

    public void rate(){
        this.movie.setAssessment(5);
    }

    public void rate(int note){
        this.movie.setAssessment(note);
    }

    public void rate(float percent){
        int tot = 0;
        if(percent <= 20) {
            tot = 3;
        } else if(percent <= 50){
            tot = 5;
        } else if (percent <= 90) {
            tot =  8;
        } else {
            tot = 10;
        }
        this.movie.setAssessment(tot);
    }

    public Gafanhoto getSpectator() {
        return spectator;
    }

    public void setSpectator(Gafanhoto spectator) {
        this.spectator = spectator;
    }

    public Video getMovie() {
        return movie;
    }

    public void setMovie(Video movie) {
        this.movie = movie;
    }

    @Override
    public String toString() {
        return "Views{" +
                "spectator=" + spectator +
                ", movie=" + movie +
                '}';
    }
}
