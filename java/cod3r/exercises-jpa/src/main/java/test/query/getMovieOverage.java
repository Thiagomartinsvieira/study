package test.query;

import infra.DAO;
import model.query.RatingMovie;

public class getMovieOverage {

    public static void main(String[] args) {

        DAO<RatingMovie> dao = new DAO<>(RatingMovie.class);
        RatingMovie rating = dao.consultOne("getGeneralMovieOverage");

        System.out.println(rating.getAverage());

        dao.close();

    }
}
