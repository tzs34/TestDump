import React from 'react'

import style from  '../styles.module.css'

const StepButton = ({ step, stepNumber}) => {

  function renderSteps(step, stepNumber){
    let steps = []
    for(var i = 1; i <= stepNumber; i++){
     let clazz = step === i ? `${style.stepdiv} ${style.stepactive}` : `${style.stepdiv}`
     steps.push( <div className={clazz} key={`${i}${step}`}/>)
    }
    return steps
  }
  return (
    <div className={style.steprow}>
    {
      step > 0 && 
        renderSteps(step, stepNumber)
    }
  </div>
  )
}



export default StepButton
