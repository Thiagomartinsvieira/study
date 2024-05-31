package control;

public class SwitchWithoutBreak {
    public static void main(String[] args) {
        String range = "black";

        switch (range.toLowerCase()){
            case "black":
                System.out.println("Sei o Bassai-Dai...");
            case "brown":
                System.out.println("Sei o Tekki Shodan");
            case "purple":
                System.out.println("Sei o Heian Godan");
            case "green":
                System.out.println("Sei Heian Yodan");
            case "orange":
                System.out.println("Sei Heian Sadan");
            case "red":
                System.out.println("Sei o Heian Nidan");
            case "yellow":
                System.out.println("Sei o Heian Shodan");
                break;
            default:
                System.out.println("I Know nothing");
        }
    }
}
