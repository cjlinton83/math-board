//import { User } from '../../../server/models/User'
const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
const { password } = require("./password_template");
const { User } = require("../../../server/models/User");
var crypto = require('crypto');
//import { User } from '../../../server/models/User'

const getEmailData = (to, name, template) => {
  //  let data = null;

    const token = crypto.randomBytes(20).toString('hex');
    console.log(token);
    /*User.update({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 360000,
    });*/

    switch (template) {
        case "hello":
            data = {
                from: "MathBoard <mathboardtutoring@gmail.com>",
                to,
                subject: `This is your Password Recovery link`,
                text: `http://localhost:3031/reset/${token}`,
            };
            /*      from: `mathboardtutoring@gmail.com`,
      to: `${user.email}`,
      subject: `link to Rest Password`,
      text:`http://localhost:3031/reset/${token}\n\n`,
    }; */
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