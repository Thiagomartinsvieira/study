package Class10;

public class Professor extends Person {
    private String specialty;
    private float wage;

    public void receiveARaise(float raise){
        this.wage += raise;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public float getWage() {
        return wage;
    }

    public void setWage(float wage) {
        this.wage = wage;
    }
}
