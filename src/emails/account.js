const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sebosy92@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Have a good fun!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sebosy92@gmail.com',
        subject: 'So this is goodbye',
        text: `Hello ${name}. We are sad, thay you are leaving. Please give us feedback.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}