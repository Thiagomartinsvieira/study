package Class03;

public class Class03 {
    public static void main(String[] args) {
      Pen c1 = new Pen();
      c1.model = "Bic Crystal";
      c1.color = "Red";
//      c1.tip = 0.5f;
        c1.charge = 80;
//        c1.covered = false;
        c1.cover();
        c1.status();
        c1.scribble();


    }
}
