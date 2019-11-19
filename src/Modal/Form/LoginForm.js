import React from 'react'
import TextField from './TextField'
import { validateText, validateEmail, validatePassword } from './form-utils'

import style from  '../styles.module.css'

const LoginForm = ({ onSubmit, validationCallback, validate = false }) => (
  <form className={`${style.loginform} ${style.fadein}`} autoComplete="off" onSubmit={onSubmit} >
    <div className={style.formdiv}>
      <TextField
        id="name"
        label="What is your name ?"
        validate={validate}
        validationFunction={validateText(validationCallback)}
      />
    </div>
    <div className={style.formdiv}>
      <TextField
        id="email"
        label="What is your email ?"
        type="email"
        validate={validate}
        validationFunction={validateEmail(validationCallback)}
      />
    </div>
    <div className={style.formdiv}>
      <TextField
        id="password"
        label="What is your password ?"
        type="password"
        validate={validate}
        validationFunction={validatePassword(validationCallback)}
      />
    </div>

    <div className={style.formsubmit}>
      <input type="submit" value="Next" />
    </div>
  </form>
)

export default LoginForm
