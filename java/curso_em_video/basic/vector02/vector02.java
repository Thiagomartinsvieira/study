package vector02;

public class vector02 {
    public static void main(String[] args) {
        String month[] = {"Jan", "Feb", "March", "Apr", "May",
                "june", "july", "Aug", "Sep", "Oct", "Nov", "Dec"};

        int tot[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        for(int c=0; c<month.length; c++ ){
            System.out.println("The month "  + month[c] + " has " + tot[c] + " Days in total");
        }
    }
}
