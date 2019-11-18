import React from 'react'

const StepButton = ({ step }) => (
  <div className="step-row">
    <div
      className={'step-div ' + (step === 1 ? 'step-active' : 'step-inactive')}
    />
    <div
      className={'step-div ' + (step === 2 ? 'step-active' : 'step-inactive')}
    />
  </div>
)

export default StepButton
