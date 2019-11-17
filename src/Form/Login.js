import React, { useState, useEffect, useRef } from 'react'
import TextField from './TextField'
import GoogleLoginButton from '../Buttons/GooleLoginButton'
import LoginForm from './LoginForm'
import StepButton from '../Buttons/StepButton'
import {
  requiredFieldsValid
} from './form-utils'

import '../App.css'

const items = [
  { label: 'Beer' },
  { label: 'Biscuits' },
  { label: 'Baby Food' },
  { label: 'Breakfast Cereal' },
  { label: 'Chocolate' },
  { label: 'Biscuits' },
  { label: 'Fizzy Drinks' },
  { label: 'Ice Cream' },
  { label: 'Pasta Sauces' },
  { label: 'Pet' },
  { label: 'Shaving' },
  { label: 'Skin Care' },
  { label: 'Spirits' },
  { label: 'Sweets' },
  { label: 'Table Sauces & Marinades' },
  { label: 'Tea' },
  { label: 'Tinned Vegtables' },
  { label: 'Yoghurt' }
]

const defaultFormFields = {
  name: { value: null, required: true },
  email: { value: null, required: true },
  password: { value: null, required: true }
}

const Login = ({ onSubmit }) => {
  const [validate, setValidateStatus] = useState(false)
  const [step, setStep] = useState(1)
  let fieldNumber = useRef(0)
  let validatedFields = useRef([])

  useEffect(() => {
    fieldNumber.current = Object.keys(defaultFormFields).length
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    setValidateStatus(true)
  }

  function checkAfterValidation({ id, value, valid }) {
    let { current: currentValidatedFields } = validatedFields
    currentValidatedFields.push({
      [id]: {
        value,
        valid,
        required: defaultFormFields[id].required
      }
    })

    if (currentValidatedFields.length === fieldNumber.current) {
      if (requiredFieldsValid(validatedFields.current)) {
        // submit you data
        if (onSubmit && typeof onSubmit === 'function') {
          onSubmit(currentValidatedFields)
        }
        validatedFields.current = []
        setValidateStatus(false)
      }
    }
  }

  return (
    <>
      <StepButton step={step} />
      <div className="title">
        <span>PromoNavigator Sign Up</span>
      </div>
      <div>
      {
          step === 1  ?
    <div>
    <div className="google-login">
        <GoogleLoginButton />
    </div>
        <LoginForm onSubmit={handleSubmit} validationCallback={checkAfterValidation} validate={validate} />
     </div>
      :
      <div>
      Two
      </div>
      
      }
      </div>
     </>
  )
}

export default Login