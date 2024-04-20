package YoutubeProject;

public class YoutubeProject {
    public static void main(String[] args) {
        Video v[] = new Video[3];
        v[0] = new Video("Class 1 POO");
        v[1] = new Video("Class 12 JAVA");
        v[2] = new Video("Class 10 HTML5");

        Gafanhoto g[] = new Gafanhoto[2];
        v[0] = new Video("Class 12 JAVA");
        g[0] = new Gafanhoto("Thiago", 24, "M", "thiago12");
        g[1] = new Gafanhoto("Lucas", 20, "M", "lucas123");

        Views views[] = new Views[5];

        views[0] = new Views(g[0], v[2]);
        views[0].rate();
//        System.out.println(views[0].toString());

        views[1] = new Views(g[0], v[1]);
        views[0].rate(87.0f);
        System.out.println(views[0].toString());



//        System.out.println(v[0].toString());
//        System.out.println(g[0].toString());

    }
}
