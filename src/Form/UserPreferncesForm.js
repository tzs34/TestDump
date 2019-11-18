import React from 'react'
import TextField from '../Form/TextField'
import MultiAutoComplete from '../AutoComplete/MultAutoComplete'
import AutoComplete from '../AutoComplete/AutoComplete'

const UserPreferenceForm = ({ onSubmit, validate, validateFunction }) => (
  <form className="login-form" autoComplete="off" onSubmit={onSubmit}>
    <div className="form-div">
      <TextField
        id="company"
        label="Company name ?"
        type="password"
        validate={validate}
      />
    </div>
    <div className="form-div">
      <MultiAutoComplete />
    </div>
    <div className="form-div">
      <AutoComplete />
    </div>
  </form>
)

export default UserPreferenceForm
