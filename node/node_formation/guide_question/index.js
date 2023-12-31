const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database')
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
    res.render('index'); 
});

app.get('/to_ask', (req, res) => {
    res.render('to_ask'); 
})

app.post('/savequestion', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send('Form received! title 2' + title + ' ' + 'description' + description)
});

app.listen(8080, () => {
    console.log('App running on http://localhost:8080');
});
