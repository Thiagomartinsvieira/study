package br.com.cod3r.mf.model;

public class ResultEvent {
    private final boolean winner;

    public ResultEvent(boolean winner){
        this.winner = winner;
    }

    public boolean isWinner(){
        return winner;
    }
}
