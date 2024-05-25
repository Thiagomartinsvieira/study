module exercisefx {
    requires javafx.controls;
    requires javafx.fxml;
    requires org.controlsfx.controls;

    opens basic;
    opens layout;
    opens org.example.exercisesjavafx.fxml;
}
