import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children, open = false }) => (
  <div>
    {
      open &&
      createPortal(children, document.body)
    }
  </div>
)

export default Portal
