const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
//import crypto from 'crypto';


// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')
const validateResetInput = require('../../validation/reset')

// Load user model
const User = require('../../models/User')

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body)

	if (!isValid) {
		return res.status(400).json(errors)
	}

	User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' })
      } else {
        const newUser = new User({
          name: req.body.name,
          role: req.body.role,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            throw err
          }
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err
            }
            newUser.password = hash
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        })
      }
    })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'Email not found' })
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              role: user.role
            }

            jwt.sign(
              payload,
              keys.JWT_KEY,
              { expiresIn: 31556926 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            return res.status(400).json({ password: 'Password incorrect' })
          }
        })
    })
})

router.post('/reset', (req, res) => {
  const { errors, isValid } = validateResetInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }
  /*User.findOne({
    where: {
      email: req.body.email,
    },
  }).then( user => {
    if(user === null) {
      res.json(`email not in db`);
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      console.log(token);
      user.update({
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 360000,
      });
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

    const mailOptions = {
      from: `mathboardtutoring@gmail.com`,
      to: `${user.email}`,
      subject: `link to Rest Password`,
      text:`http://localhost:3031/reset/${token}\n\n`,
    };

    smtpTransport.sendMail(mail, function(error, response) {
      if(error) {
          console.log(error)
      } else {
          console.log( " email sent successfully")
      }
      smtpTransport.close();
  })

   }
  })*/

})

module.exports = router
