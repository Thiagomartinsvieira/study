package lambdas;

public class Threads {
    public static void main(String[] args) {

        Runnable job1 = new Job1();
        Runnable job2 = new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 10; i++) {
                    System.out.println("Task #02");
                    try {
                        Thread.sleep(100);
                    }catch (Exception e){

                    }
                }
            }
        };

        Runnable job3 = Threads::job3;

        Thread t1 = new Thread(job1);
        Thread t2 = new Thread(job2);
        Thread t3 = new Thread(job3);

        t1.start();
        t2.start();
        t3.start();
    }

    static void job3(){
            for (int i = 0; i < 10; i++) {
                System.out.println("Task #03");
                try {
                    Thread.sleep(100);
                }catch (Exception e){

                }
            }
    }
}
