import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ReactAnimation = ({children, name, Appear, Atime=500, Leave, Ltime=500}) => {
  return (
    <ReactCSSTransitionGroup
      transitionName={ name }
      transitionAppear={ Appear }
      transitionAppearTimeout={ Atime }
      transitionLeave={ Leave }
      transitionLeaveTimeout={ Ltime }>
        { children }
    </ReactCSSTransitionGroup>
  )
}

export default ReactAnimation
