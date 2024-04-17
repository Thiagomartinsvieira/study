package Class11;

public class Scholarship extends Student {
    private float bag;

    public void renewBag(){
        System.out.println("Renew  bag of " + this.getName());
    }

    @Override
    public void payMonthlyFee(){
        System.out.println(this.getName() + " is a Sholarship! payment facilited");
    }

    public float getBag() {
        return bag;
    }

    public void setBag(float bag) {
        this.bag = bag;
    }
}
