package Class12;

public abstract class Animal {
    protected float width;
    protected int age;
    protected int members;

    public abstract void move();
    public abstract void eat();
    public abstract void makeSound();

    public float getWidth() {
        return width;
    }

    public void setWidth(float width) {
        this.width = width;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getMembers() {
        return members;
    }

    public void setMembers(int members) {
        this.members = members;
    }
}
