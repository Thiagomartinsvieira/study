const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'thiago@email.com',
        pass: "123456abc"
    }
})

transporter.sendMail({
    from: "Thiago Martins  <thiago@email.com>",
    to: "thiago@gmail.com",
    subject: "hi, this is just a test",
    text: "Hi my name is Thiago and i like to use Nodemailer lib",
    html: "Hello my name is Thiago Martins! <a href='https://github.com/Thiagomartinsvieira'></a> "
}).then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
})