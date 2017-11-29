import React from 'react'
// import { CSSTransitionGroup } from 'react-transition-group'
// import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// const ReactAnimation = ({children, name, Appear, Atime=500, Leave, Ltime=500}) => {
//   return (
//     <CSSTransition in
//       className='fade'
//       timeout={1000}>
//         {children}
//     </CSSTransition>
//   )
// }
const ReactAnimation = ({children, name, Appear, Atime=500, Leave, Ltime=500}) => {
  return (
    <ReactCSSTransitionGroup
      transitionName={ name }
      transitionAppear={ Appear }
      transitionAppearTimeout={ Atime }
      transitionLeave={ Leave }
      transitionLeaveTimeout={ Ltime }
    >
      { children }
    </ReactCSSTransitionGroup>
  )
}

export default ReactAnimation
