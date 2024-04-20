package YoutubeProject;

public class Gafanhoto extends Person{
    private String login;
    private int totWatched;

    public Gafanhoto(String name, int age, String sex, String  login) {
        super(name, age, sex);
        this.login = login;
        this.totWatched = 0;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public int getTotWatched() {
        return totWatched;
    }

    public void setTotWatched(int totWatched) {
        this.totWatched = totWatched;
    }

    @Override
    public String toString() {
        return "Gafanhoto{" + super.toString() +
                "\nlogin='" + login + '\'' +
                ", totWatched=" + totWatched +
                '}';
    }
}
