function toTakeId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function searchEmailInDatabase(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("thiago@email.com")
        }, 2000);
    })
}

function sendEmail(body, to){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const thereWasError = false

            if(!thereWasError){
                    resolve({time: 6, to: "thiago@email.com"}) // Promisse Ok!
            } else {
                reject("Full queue") // Failed
            }

        }, 4000)
    });
}

console.log('Start!')
toTakeId().then((id) => {
    searchEmailInDatabase(id).then((email) => {
        sendEmail('Hello', "how are you?", email).then(() => {
            console.log("Email, ok " + id)
        }).catch(error => {
            console.log(error)
        })

    })
})
console.log('Finish')