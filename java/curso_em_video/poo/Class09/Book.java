package Class09;

public class Book implements Publication {
    private String title;
    private String author;
    private int totPages;
    private boolean open;
    private Person reader;
    private int actualPage;

    public String details() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", totPages=" + totPages +
                ", open=" + open +
                ", reader=" + reader.getName() +
                ", age= " + reader.getAge() +
                ", sex= " + reader.getSex() +
                '}';
    }

    public Book(String title, String author, int totPages, Person reader) {
        this.title = title;
        this.author = author;
        this.totPages = totPages;
        this.open = false;
        this.actualPage = 0;
        this.reader = reader;
    }

    // Métodos da interface Publication

    @Override
    public void open() {
        this.open = true;
    }

    @Override
    public void close() {
        this.open = false;
    }

    @Override
    public void leafThrough(int p) {
       if(p > this.totPages){
           this.actualPage = 0;
       } else  {
           this.actualPage = p;
       }
    }

    @Override
    public void advancePage() {
        this.actualPage++;
    }

    @Override
    public void backPage() {
        this.actualPage--;
    }
}