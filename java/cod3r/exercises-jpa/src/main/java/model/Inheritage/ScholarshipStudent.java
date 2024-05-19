package model.Inheritage;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("AB")
public class ScholarshipStudent extends Student {
    private double ScholarshipValue;
    private ScholarshipStudent(){

    }

    public ScholarshipStudent(long registrationNumber, String name, double scholarshipValue) {
        super(registrationNumber, name);
        ScholarshipValue = scholarshipValue;
    }

    public double getScholarshipValue() {
        return ScholarshipValue;
    }

    public void setScholarshipValue(double scholarshipValue) {
        ScholarshipValue = scholarshipValue;
    }
}
