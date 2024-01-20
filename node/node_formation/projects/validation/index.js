var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser('sbajdbk'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', (req, res) => {
  var emailError = req.flash('emailError');
  var pointsError = req.flash('pointsError');
  var nameError = req.flash('nameError');
  var email = req.flash('email'); // Declare email variable

  emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
  email = (email == undefined || email.length == 0) ? '' : email;

  res.render('index', { emailError, pointsError, nameError, email: email });
});

app.post('/form', (req, res) => {
  var { name, email, points } = req.body;

  var emailError;
  var pointsError;
  var nameError;

  if (email == undefined || email == '') {
    emailError = 'The email cannot be empty';
  }

  if (points == undefined || points <= 0) {
    pointsError = 'You need to provide a point greater than 0';
  }

  if (name == undefined || name == '') {
    nameError = 'Name cannot be empty';
  }

  if (emailError != undefined || pointsError != undefined || nameError != undefined) {
    req.flash('emailError', emailError);
    req.flash('pointsError', pointsError);
    req.flash('nameError', nameError);

    req.flash('email', email);

    res.redirect('/');
    return;
  } else {
    res.send('It\'s ok, this form is valid');
  }
});

app.listen(5678, () => {
  console.log('app is running!');
});
