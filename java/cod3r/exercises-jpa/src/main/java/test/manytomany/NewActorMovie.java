package test.manytomany;

import infra.DAO;
import model.manytomany.Actor;
import model.manytomany.Movie;

public class NewActorMovie {

    public static void main(String[] args) {

        Movie movieA = new Movie("American Pie", 8.7);
        Movie movieB = new Movie("Escape Rhythm", 9.3);

        Actor actorA = new Actor("Manuel Barradas");
        Actor actorB = new Actor("Olavo de Carvalho");

        movieA.addActor(actorA);
        movieA.addActor(actorB);

        movieB.addActor(actorA);

        DAO<Movie> dao = new DAO<>(Movie.class);
        dao.includeAtomic(movieA);
        dao.includeAtomic(movieB); 
    }
}
