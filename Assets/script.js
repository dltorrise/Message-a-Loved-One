const submit = document.getElementById("form-submit")
const nameInput = document.getElementById("name-input")
const messageInput = document.getElementById("message-input")

const securityKey = 'f7c01209-da41-4015-bbcb-d44d0a465341'

const message = "Thank you. Your soul has been harvested"

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Submitted')

    Email.send({
        SecureToken : securityKey,
        To : 'dltorrise@gmail.com',
        From : "dltorrise@gmail.com",
        Subject : "Message from" + nameInput,
        Body : messageInput
    }).then(
      message => alert(message)
    );
    

})