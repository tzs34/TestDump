import React, { useState, useEffect } from 'react'

import style from  '../styles.module.css'

const TextField = ({
  label,
  id,
  validationFunction = null,
  type = 'text',
  validate = 'false',
  required = true
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (
      validate &&
      validationFunction &&
      typeof validationFunction === 'function'
    ) {
      let isValid = validationFunction(value, id)
      if (!isValid) {
        setError(true)
      }
    }
  }, [validate])
  function handleOnChange({ target: { value } }) {
    setValue(value)
  }

  

  return (
    <div className={style.formdiv}>
      <div>
        <label htmlfor={`${id}-field`}>{label}</label>
      </div>
      <div>
        <input
          name={`${id}-field`}
          id={id}
          type={type}
          value={value}
          onChange={handleOnChange}
          className={String(error) === 'true' ? `${style.inputerror}` : ''}
        ></input>
      </div>
    </div>
  )
}

export default TextField
