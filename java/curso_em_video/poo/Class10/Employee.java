package Class10;

public class Employee extends Person {
    private String sector;
    private boolean working;

    public void changeWork(){
        this.working = ! this.working;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public boolean getWorking() {
        return working;
    }

    public void setWorking(boolean working) {
        this.working = working;
    }
}
