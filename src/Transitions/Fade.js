import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const Fade = ({ children }) => (
  <TransitionGroup component={null}>
    <CSSTransition timeout={500} classNames="fade">
      {children}
    </CSSTransition>
  </TransitionGroup>
)

export default Fade
