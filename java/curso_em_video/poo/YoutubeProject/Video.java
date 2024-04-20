package YoutubeProject;

public class Video implements ActionsVideo{
    private String title;
    private int assessment;
    private int views;
    private int likes;
    private boolean playing;

    public Video(String title) {
        this.title = title;
        this.assessment = 1;
        this.views = 0;
        this.likes = 0;
        this.playing = false;
    }

    @Override
    public void play() {
        this.playing = true;
    }

    @Override
    public void pause() {
        this.playing = false;
    }

    @Override
    public void like() {
        this.likes++;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getAssessment() {
        return assessment;
    }

    public void setAssessment(int assessment) {
        int nova;
        nova = (int) ((this.assessment + assessment)/this.views);
        this.assessment = assessment;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public boolean isPlaying() {
        return playing;
    }

    public void setPlaying(boolean playing) {
        this.playing = playing;
    }

    @Override
    public String toString() {
        return "Video{" +
                "title='" + title + '\'' +
                ", assessment=" + assessment +
                ", views=" + views +
                ", likes=" + likes +
                ", playing=" + playing +
                '}';
    }
}
