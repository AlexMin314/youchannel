import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'
import ReactAnimation from './ReactAnimation'

const InsWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  padding-top: 150px;
  color: white;
  text-align: center;
  position: absolute;
  z-index: 3;
`

export const Instruction = ({txt, channel}) => (
  <InsWrapper key={ channel }>
    <div>{ txt }</div>
    <div>This is channel #{ channel }</div>
  </InsWrapper>
)

export const ChannelWelcome = (props) => {
  return (
    <ReactAnimation
      Appear
      Leave
      name={ 'fade' }>
      { props.enterChk && <Instruction
                            txt={ `Hello, ${'user'}` }
                            channel={ props.match.params.channel }/> }
    </ReactAnimation>
  )
}

Instruction.PropTypes = {
  txt: PropTypes.string,
  channel: PropTypes.string
}

Instruction.defaultProps = {
  txt: 'no text',
  channel: 'no channel'
}
