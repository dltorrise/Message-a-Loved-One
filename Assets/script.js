//DOM Elements
const submit = document.getElementById("form-submit")
const nameInput = document.getElementById("name-input")
const messageInput = document.getElementById("message-input")
//Security key
const securityKey = 'f7c01209-da41-4015-bbcb-d44d0a465341'


//event listener
submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submitted')
    nameInput.value = ''
    messageInput.value = ''
//email code
    Email.send({
        SecureToken : securityKey,
        To : 'dltorrise@gmail.com',
        From : "dltorrise@gmail.com",
        Subject : "Message from " + nameInput.value.trim(),
        Body : `<h3>Message from SMTJS SERVER: </h3>\n\n <p>${messageInput.value.trim()}</p>`
    }).then(
      message => alert("Thank you. Your soul has been harvested.")
    );
    

})