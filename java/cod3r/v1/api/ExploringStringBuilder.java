package api;

public class ExploringStringBuilder {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("João");
        sb.append(",").append("Maria");
        sb.append(",").append("Day");
        sb.append(",").append("Lucas");

        System.out.println(sb.toString());
        System.out.println(sb.substring(0, 4));
        System.out.println(sb.toString());
    }
}
