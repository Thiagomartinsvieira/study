function sendEmail(body, to){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const thereWasError = false

            if(!thereWasError){
                    resolve() // Promisse Ok!
                    console.log('email sent')
            } else {
                reject() // Failed
            }

        }, 4000)
    });
}

sendEmail("Hello Word", "thiago@email.com")