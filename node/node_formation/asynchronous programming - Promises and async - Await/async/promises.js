function getId(){
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
            
            const thereWasError = true

            if(!thereWasError){
                    resolve({time: 6, to: "thiago@email.com"}) // Promisse Ok!
            } else {
                reject("Full queue") // Failed
            }

        }, 4000)
    });
}

function catchUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Thiago", lang: 'JS'},
                {name: "Lucas", lang: 'Rust'},
                {name: "Maria", lang: 'Java'},
            ])
        }, 3000)
    })
}

async function main(){
    var id = await getId() 
    var email = await searchEmailInDatabase(id)
    try {
        await sendEmail('Hello', 'How are you', email)
        console.log('Email send with success!')
    } catch (error) {
        console.log(error)
    }

}

main()





// console.log('Start!')
// toTakeId().then((id) => {
//     searchEmailInDatabase(id).then((email) => {
//         sendEmail('Hello', "how are you?", email).then(() => {
//             console.log("Email, ok " + id)
//         }).catch(error => {
//             console.log(error)
//         })

//     })
// })
// console.log('Finish')