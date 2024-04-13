package Class02;

public class Class02 {
    public static void main(String[] args) {
      Pen c1 = new Pen();
      c1.color = "Blue";
      c1.tip = 0.5f;
      c1.cover();

      c1.status();
      c1.scribble();

      Pen c2 = new Pen();
      c2.model =  "HOSTNET";
      c2.color = "Black";
      c2.uncover();
      c2.status();
      c2.scribble();
    }
}
