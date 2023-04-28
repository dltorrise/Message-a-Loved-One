//DOM Elements
const submit = document.getElementById("form-submit")
const nameInput = document.getElementById("name-input")
const messageInput = document.getElementById("message-input")
//Security key
const securityKey = 'f7c01209-da41-4015-bbcb-d44d0a465341'


//event listener
submit.addEventListener('submit', (e) => {
    window.alert("Thank you. your soul has been harvested.")
    console.log('Submitted')
//email code
    Email.send({
        SecureToken : securityKey,
        To : 'dltorrise@gmail.com',
        From : "dltorrise@gmail.com",
        Subject : "Message from " + nameInput.value,
        Body : `<h3>Message from SMTJS SERVER: </h3>\n\n <p>${messageInput.value}</p>`
    }).then(
      message =>  alert("Thank you. Your soul has been harvested.")
   );
  

})

//trying to find a way to clear input after submission
//might deploy to heroku
//might create another alert