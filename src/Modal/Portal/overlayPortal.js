import React from 'react'
import Portal from './portal'

import style from  '../styles.module.css'

const OverlayPortal = ({ children, open = false }) => (
  <>
    open &&
    <Portal open={open}>
      <div className={style.overlay}>
        <div className={style.overlayinner}>{children}</div>
      </div>
    </Portal>
  </>
)

export default OverlayPortal
