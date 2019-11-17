import React from 'react'
import Portal from './portal'
const OverlayPortal = ({ children, open = false }) => (
  <>
    open &&
    <Portal open={true}>
      <div className="overlay">
        <div className="overlay-inner">{children}</div>
      </div>
    </Portal>
  </>
)

export default OverlayPortal
