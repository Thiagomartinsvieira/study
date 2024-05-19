package model.Inheritage;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "type", length = 2, discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("AL")
public class Student {

    @Id
    private long registrationNumber;
    private String name;

    Student(){

    }

    public Student(long registrationNumber, String name) {
        this.registrationNumber = registrationNumber;
        this.name = name;
    }

    public long getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(Long registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
