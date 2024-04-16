package Class07;

public class Figther {
    // Atributes
    private String name;
    private String nationality;
    private int age;
    private float height;
    private float weight;
    private String category;
    private int victory;
    private int defeats;
    private int draws;

    // Methods

    public void present(){
        System.out.println("------------------------------------------");
        System.out.println("This time has come to introduces the fighter " + this.getName());
        System.out.println("Directly from " + this.nationality);
        System.out.println("With " + this.getAge() + " years " + this.height);
        System.out.println("Weighing " + this.getWeight() + "Kg");
        System.out.println(this.getVictory() + " Victories");
        System.out.println(this.getVictory() + " Defeats");
        System.out.println(this.getDraws() + " Draws");
    }

    public void status(){
        System.out.println(this.getName() + " is an " + this.getCategory());
        System.out.println("ItWon: " + this.getVictory() + " times");
        System.out.println("Draws: " + this.getDraws() + " times");
        System.out.println("ItLost: " + this.getDefeats() + " times");
    }

    public void winFight(){
        this.setVictory(this.getVictory() + 1);
    }

    public void loseFight(){
        this.setDefeats(this.getDefeats() + 1);
    }

    public void drawFight(){

    }

    // Especial methods


    public Figther(String name, String nationality, int age, float height, float weight, int victory, int defeats, int draws) {
        this.name = name;
        this.nationality = nationality;
        this.age = age;
        this.height = height;
        this.setWeight(weight);
        this.victory = victory;
        this.defeats = defeats;
        this.draws = draws;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
        this.setCategory();
    }

    public String getCategory() {
        return category;
    }

    private void setCategory() {
        if(this.weight < 52.2){
            this.category = "Invalid";
        } else if (this.weight <= 70.3){
            this.category = "Light";
        } else if (this.weight <= 83.9){
            this.category = "Medium";
        } else if (this.weight <= 120.2) {
            this.category = "Heavy";
        } else {
            this.category = "Invalid";
        }
    }

    public int getVictory() {
        return victory;
    }

    public void setVictory(int victory) {
        this.victory = victory;
    }

    public int getDefeats() {
        return defeats;
    }

    public void setDefeats(int defeats) {
        this.defeats = defeats;
    }

    public int getDraws() {
        return draws;
    }

    public void setDraws(int draws) {
        this.draws = draws;
    }
}
