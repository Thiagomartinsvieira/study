package streams;

public class MediaTest {
    public static void main(String[] args) {

        Media m1 = new Media().add(9.3).add(6.7);
        Media m2 = new Media().add(7.9).add(6.6);

        System.out.println(m1.getValue());
        System.out.println(m2.getValue());

        System.out.println(Media.toCombine(m1, m2).getValue());
    }
}
