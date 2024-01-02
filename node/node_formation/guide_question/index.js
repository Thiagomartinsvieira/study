const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database')
const question = require('./database/Question');
const Question = require('./database/Question');
const Response = require('./database/Response');
// Database 

connection
    .authenticate()
    .then(() => {
        console.log('connection made to database')
    })
    .catch((errMsg) => {
        console.log(errMsg)
    })

// Set view engine and static folder
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    question.findAll({raw: true, order: [
        ['id', 'DESC'] // ASC = crescent || DESC =  descending
    ]}).then(questions => {
        res.render('index', {
            questions: questions
        }); 
    })
});

app.get('/to_ask', (req, res) => {
    res.render('to_ask'); 
})

app.post('/savequestion', (req, res) => {

    var title = req.body.title;
    var description = req.body.description;

    Question.create({
        title: title,
        description: description 
    }).then(() => {
        res.redirect('/');
    })
});

app.get('/question/:id', (req, res) => {
    var id = req.params.id;
    question.findOne({
        where: {id: id}
    }).then(question => {
        if(question != undefined) { // found

            Response.findAll({
                where: {questionID: question.id},
                order: [ ['id', 'DESC'] ]
            }).then(answers => {
                res.render('question', {
                    question: question,
                    answers: answers
                });
            });            
        } else { // not found 
            res.redirect('/');
        }
    });
})

app.post('/answer', (req, res) => {
    var body = req.body.body
    var questionID = req.body.question
    Response.create({
        body: body,
        questionID: questionID
    }).then(() => {
        res.redirect('/question/' + questionID) 
    });
});

app.listen(8080, () => {
    console.log('App running on http://localhost:8080');
});
