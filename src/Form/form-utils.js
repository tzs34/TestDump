const curry = fn => {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error('EMPTY INVOCATION')
    }
    if (xs.length >= fn.length) {
      return fn(...xs)
    }
    return curry(fn.bind(null, ...xs))
  }
}
const isValid = (value, id) => {
  return { id, value, valid: true }
}
const isNotValid = id => {
  return { id, value: null, valid: false }
}

const validateText = callback => (str, id) => {
  let valid = str.length > 0
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}

const validateEmail = callback => (str, id) => {
  let valid = str.includes('@')
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}

const validatePassword = callback => (str, id) => {
  let valid = str.length > 10
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}
const requiredFieldsValid = arr =>
  arr.filter(o => o.required).every(o => o.valid === true)

export { validateText, validateEmail, validatePassword, requiredFieldsValid }
