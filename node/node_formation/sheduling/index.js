const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const appointmentService = require('./services/AppointmentService')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/scheduling').then(() => {
    console.log('mongo is running')
}).catch(error => {
    console.log(error)
})

app.get('/', (req, res) => {
   res.render('index')
})

app.get('/register', (req, res) => {
    res.render('create')
})

app.post('/create', async (req, res) => {
   
   var status = await appointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time 
    )

    if(status){
        res.redirect('/')
    } else {
        res.send('A falilure occurred!')
    }

})

app.get('/getcalendar', async (req, res) => {
    const appointments = await appointmentService.getAll(false);
    const events = appointments.map(appointment => ({
        title: appointment.name, 
        start: appointment.date, 
        id: appointment._id,
    }));
    res.json(events);
});

app.get('/event/:id', async (req, res) => {
    const appointment = await appointmentService.GetById(req.params.id)
    console.log(appointment)
   res.render('event', {appo: appointment})
})

app.post('/finish', async (req, res) => {
    const id = req.body.id
    var result = await appointmentService.Finish(id)
    res.redirect('/')
})

app.get('/list', async(req, res) => {

    // await appointmentService.Search('consulta de rotina')

    const appos = await appointmentService.getAll(true)
    res.render('list', {appos})
})

app.get('/searchresult', async(req, res) => {
    var appos = appointmentService.Search(req.query.search)
    res.render('list', {appos})
})

var pollTime = 1000 * 60 * 5

setInterval(async () => {
    
    await appointmentService.SendNotification()

}, pollTime)

app.listen(8080, () => {})