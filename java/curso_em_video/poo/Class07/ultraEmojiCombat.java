package Class07;

public class ultraEmojiCombat {
    public static void main(String[] args) {
        Figther f[] = new Figther[6];

        f[0] = new Figther("Pretty Boy", "France", 31, 1.75f, 68.9f, 11, 2, 1);
        f[1] = new Figther("Putscript", "Brazilian", 29, 1.68f, 57.8f, 14, 2, 3);
        f[2] = new Figther("Snapshadow", "USA", 35, 1.65f, 80.9f, 12, 2, 1);
        f[3] = new Figther("Dead Code", "Russia", 28, 1.80f, 84.3f, 9, 0, 2);
        f[4] = new Figther("UFOCatcher", "Japan", 25, 1.78f, 88.7f, 13, 1, 0);
        f[5] = new Figther("Overhand", "Mexico", 32, 1.85f, 92.2f, 12, 3, 1);

        f[3].setDraws(10);
        f[3].status();
    }
}
