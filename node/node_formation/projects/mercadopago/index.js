const express = require('express')
const mercadoPago = require('mercadopago')
const app = express()

mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN_HERE");


app.get("/", (req, res) => {
    res.send("Hello word!" + Date.now)
})

app.get("/pay", async(req, res) => {

    const id = "" + Date.now()
    const payerEmail = "thiago@email.com"

   
    const data  = {
        items: [
            item = {
                id: id,
                title: "2x video games",
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer: {
            email: payerEmail
        },
        external_reference: id

    }

    try {
        const payment = await mercadoPago.preferences.create(data)
        console.log(payment)
        return res.redirect(payment.body.init_point)
    } catch (error) {
        return res.send(error.message)
    }

})

app.post('/not', (req, res) => {
    const id = req.query.id

    setTimeout(() => {

        const filter = {
            "order.id": id
        }

        mercadoPago.payment.search({
            qs: filters
        }).then(data => {
            const payment = data.body.results[0]
            
            if(payment != undefined){
                console.log(payment.external_reference)
                console.log(payment.status)

            }else {
                console.log("Payment does not exist")
            }

        }).cath(error => {
            console.log(error)
        })

    }, 20000)

    res.send('ok')
})

app.listen(80, (req, res) => {

    console.log("Server is running!")

})