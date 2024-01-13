class Movie{
    constructor(title, year, genre, director, duration){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.duration = duration;
        this.actors = [];
        
    }

    Play(){
        console.log('Reproducing...')
    }

    Pause(){
        console.log('Paused ||')
    }

    Advance(){
        console.log('Advanced >>')
    }

    Close(){
        console.log('Closed X')
    }

    token(){
        console.log(`Title: ${this.title}`);
        // console.log(`Relase year: ${this.year}`);
        // console.log(`Genre: ${this.genre}`);
        // this.Play();
        // this.Advance();
    }

}

var Avengers = new Movie("Avangers 2", 2014, 'Action', 'Somebody', '2h');

Avengers.token();

// console.log(Avengers.title);
// console.log(Avengers.year);
// console.log(Avengers.genre);

var Batman = new Movie('Batman', 2009, 'Action', 'Somebody 2', '2h30m');

Batman.token();


var Wonka = new Movie('Wonka', 2023, 'Comedi', 'Somebody 3', '2h10m');

Wonka.token();

// console.log(Batman.title);
// console.log(Batman.genre);
// console.log(Batman.year);

// class Student {
//     constructor(student, age, course, teachers, grades) {
//         this.student = student;
//         this.age = age;
//         this.course = course;
//         this.teachers = teachers;
//         this.grades = grades;
//     }

//     whenItStarted() {
//         console.log(`Student ${this.student} started the ${this.course} course.`);
//     }

//     approved() {
//         console.log(`${this.student} has been approved.`);
//     }

//     withdrawal() {
//         console.log(`${this.student} dropped out of the ${this.course} course.`);
//     }
// }

// // use example

// const student1 = new Student('Thiago Martins', 20, 'Computter Science', ['Robert', 'Samuel', 'Veronica', [90, 85,92]])

// student1.whenItStarted();
// student1.approved();
// student1.withdrawal();


