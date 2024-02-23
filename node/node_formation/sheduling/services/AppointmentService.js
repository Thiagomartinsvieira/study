const appointment = require('../models/Appointment')
const mongoose = require('mongoose')
const AppointmentFactory = require('../factories/AppointmentFactory')
const mailer = require('nodemailer')

const Appo = mongoose.model('Appointment', appointment)

class appointmentService {

    async Create(name, email, cpf, description, date, time){
        var newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false,
            notified: false
        })

        try {
            await newAppo.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getAll(showFinished){

        if(showFinished){
            return await Appo.find()
        } else {
            const appos = await Appo.find({'finished:': false})
            const appointments = []

            appos.forEach(appointment => {

                if(appointment.date != undefined){
                    appointment.push(AppointmentFactory.Build(appointment) )
                }

            })

            return appointments

        }
    }

    async GetById(id){
      try {
        const event =  await Appo.findOne({'_id': id})
        return event
      } catch (error) {
        console.log(error)
      }
    }

    async Finish(id){
        try {
            await Appo.findByIdAndUpdate(id, {finished: true})
            return true
        } catch (error) {
            console.log(error)
            return false
        }
        
    }

    async Search(query){
      try {
        var appos = await Appo.find().or([{email: query}, {cpf: query}])
        return appos
      } catch (error) {
        console.log(error)
        return []
      }
    }

    async SendNotification(){


        const appos = await this.getAll(false)

        const transporter = mailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 25,
            auth: {
                user: 'cbe471e28d4cce',
                pass: '13d819edeedc80'
            }
        })

        appos.forEach(async app => {

            const date = app.start.getTime()
            
            const hour = 1000 * 60  * 60
            const gap = date-Date.now()

            if(gap <= hour){
              
                if(!app.notified){

                  await Appo.findByIdAndUpdate(app.id, {notified: true})

                  transporter.sendMail({
                    from: 'Thiago Viera <thiago@email.com>',
                    to: app.email,
                    subject: 'your appointment will take place soon',
                    text: 'your appointment will take place in one hour, avoid delays'
                  }).then(() => {

                  }).catch(error => {

                  })

                }

            }

        })
    }

}

module.exports = new appointmentService()

