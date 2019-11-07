const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
const { password } = require("./password_template");

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "MathBoard <mathboardtutoring@gmail.com>",
                to,
                subject: `This is your Password Recovery ${name}`,
                html: Hello()
            }
            break;

        case "password":
            data = {
                from: "MathBoard",
                to,
                subject: `Welcome to MathBoard ${name}`,
                html: password()
            }
            break;
        default:
            data;
    }
    return data;
}

const sendEmail = (to, name, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "mathboardtutoring@gmail.com",
            pass: "Mathboard!123"
        },
        tls:{
            rejectUnauthorized:false
            }
    });

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })

}

module.exports = { sendEmail }