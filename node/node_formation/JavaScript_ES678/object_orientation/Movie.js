class Movie{
    constructor(){

        this.movie = '';
        this.year = 2000;
        this.genre = '';
        this.director = '';
        this.actors = [];
        this.duration = 0;
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

}

var Avengers = new Movie();
var Hul = new Movie();
var starWars = new Movie();






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


