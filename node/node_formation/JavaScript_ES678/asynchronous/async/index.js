function sendEmail(body, callback) {
    setTimeout(() => {
       
        var thereWasAnError = false;

        if(thereWasAnError){
            callback(12, "Email sending failed!");
        }else{
            callback(12);
        }        
    }, 3000);
}

console.log('Start to send email!')
sendEmail("Hi, Welcome to my udemy course", (time, error) => {

    if(error === undefined){ // Ok
        console.log('Its, Ok')
        console.log(`Ttime: ${time}s`)
    } else{ // error 
        console.log('Error occurred: ' + error)
    }

});
