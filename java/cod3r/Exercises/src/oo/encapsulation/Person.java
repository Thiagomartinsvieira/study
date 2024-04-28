package oo.encapsulation;

public class Person {
    private int age;
    private String name;
    private String lastName;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person(String name,String lastName, int age){
        setName(name);
        setLastName(lastName);
        setAge(age);
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCompletedName(){
        return getName() + " " + getLastName();
    }

    // Getter
    public int getAge() {
        return age;
    }

    // Setter
    public void setAge(int newAge){
        newAge = Math.abs(newAge);
        if(newAge >= 0 && newAge <= 120){
            this.age = newAge;
        }
    }

    @Override
    public String toString() {
        return "Person{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
