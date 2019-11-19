import React from 'react'
import TextField from '../Form/TextField'
import MultiAutoComplete from '../AutoComplete/MultAutoComplete'
import AutoComplete from '../AutoComplete/AutoComplete'
import {validateCategory, validateBrandSelection, validateText, BRAND_THRESHOLD } from './form-utils'


import style from  '../styles.module.css'

const UserPreferenceForm = ({ onSubmit, validate=false, validationCallback=()=>{}}) => (
  <form className={`${style.form} ${style.fadein}`} autoComplete="off" onSubmit={onSubmit}>
    <div className={style.formdiv}>
      <TextField
        id="company"
        label="Company name ?"
        type="text"
        validate={validate}
        validationFunction={validateText(validationCallback)}
      />
    </div>
    <div className={style.formdiv}>
      <MultiAutoComplete 
        placeholder={'Choose brands'} 
        name='brands'
        selectionLimit={BRAND_THRESHOLD}
        validate={validate} 
        validationFunction={validateBrandSelection(validationCallback)}
       />
    </div>
    <div className={style.formdiv}>
      <AutoComplete 
        placeholder={'Choose category'} 
        name='category'
        validationFunction={validateCategory(validationCallback)}
      />
    </div>
    <div className={style.formsubmit}>
      <input type="submit" value="Submit" />
    </div>
  </form>
)

export default UserPreferenceForm
