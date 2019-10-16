const Validator = require('validator')
const isEmpty = require('is-empty')

function validateRegisterInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.role = !isEmpty(data.role) ? data.role : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.confirm = !isEmpty(data.confirm) ? data.confirm : ''

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = 'Role field is required (Instructor or Student)'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }
  if (Validator.isEmpty(data.confirm)) {
    errors.confirm = 'Confirm password field is required'
  }
  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Password must be at least 8 characters'
  }
  if (!Validator.equals(data.password, data.confirm)) {
    errors.confirm = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateRegisterInput
