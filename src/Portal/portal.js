import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children, open = false }) => {
  return createPortal(children, document.body)
}

export default Portal
