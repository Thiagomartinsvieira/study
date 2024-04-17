package Class10;

public class Student extends Person {
    private int mat;
    private String course;

    public void cancelMatr(){
        System.out.println("Registration will be canceled");
    }

    public int getMat() {
        return mat;
    }

    public void setMat(int mat) {
        this.mat = mat;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
