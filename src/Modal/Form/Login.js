import React, { useState, useEffect, useRef } from 'react'
import GoogleLoginButton from '../Buttons/GooleLoginButton'
import LoginForm from './LoginForm'
import UserPreferencesForm from './UserPreferncesForm'
import StepButton from '../Buttons/StepButton'
import { requiredFieldsValid } from './form-utils'

import style from  '../styles.module.css'

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

const Login = ({  submitUserDetails, submitUserPreferences, step}) => {
  
  const [validate, setValidateStatus] = useState(false)

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
      
        if (submitUserDetails && typeof submitUserDetails === 'function') {
          submitUserDetails(currentValidatedFields)
        
        }
      }
      validatedFields.current = []
      setValidateStatus(false)
    }
  }

  function onSubmitPeferences(e){
    e.preventDefault()
    setValidateStatus(true)

    if (submitUserPreferences && typeof submitUserPreferences === 'function') {
  
 
    }
  }

  function checkPeferencesAfterValidation({id, value, valid}){
    console.log(id, value, valid)
  }
  return (
    <div>
      <div className={style.formcenter}>
        <StepButton step={step} stepNumber={2}/>
      </div>
      <div className={style.title}>
        <span>PromoNavigator Sign Up</span>
      </div>
      <div>
        {step === 1 ? (
          <div>
            <div className={style.googlelogin}>
              <GoogleLoginButton />
            </div>
            <LoginForm
              onSubmit={handleSubmit}
              validationCallback={checkAfterValidation}
              validate={validate}
            />
          </div>
        ) : (
          <div>
            <UserPreferencesForm 
              onSubmit={onSubmitPeferences} 
              validationCallback={checkPeferencesAfterValidation} 
              validate={validate}/>
          </div>
        )}
      </div>
      </div>
  
  )
}

export default Login
