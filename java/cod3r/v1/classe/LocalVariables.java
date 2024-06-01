package classe;

public class LocalVariables {
    int a = 2;
    int a1 = 10;
    void test1() {
        int a1 = 2;
        System.out.println(a);
        System.out.println(a1);

        if (a1 > 3) {
            int a2 = a1;
        }

    }

    void test2() {
        int a1 = 7;
        System.out.println(this.a1);
    }

}
