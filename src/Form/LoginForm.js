import React from 'react'
import TextField from './TextField'
import {
  validateText,
  validateEmail,
  validatePassword
} from './form-utils'

const LoginForm = ({onSubmit, validationCallback, validate=false}) => {

    console.log(validationCallback)
       console.log(validate)
          console.log(onSubmit)
    return(

<form className="login-form" autoComplete="off" onSubmit={onSubmit}>
    <div className="form-div">
        <TextField
            id="name"
            label="What is your name ?"
            validate={validate}
            validationFunction={validateText(validationCallback)}
        />
    </div>
    <div className="form-div">
        <TextField
            id="email"
            label="What is your email ?"
            type="email"
            validate={validate}
            validationFunction={validateEmail(validationCallback)}
        />
    </div>
    <div className="form-div">
        <TextField
            id="password"
            label="What is your password ?"
            type="password"
            validate={validate}
            validationFunction={validatePassword(validationCallback)}
        />
    </div>

    <div className="form-submit">
        <input type="submit" value="Submit" />
    </div>
</form>
)
}

export default LoginForm