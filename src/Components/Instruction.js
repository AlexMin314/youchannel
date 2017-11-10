import React from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const InsWrapper = styled.div`
  height: 100%;
  background: inherit;
  padding-top: 150px;
  color: white;
  text-align: center;
`

export const Instruction = ({txt, channel}) => (
  <InsWrapper key={ channel }>
    <div>{ txt }</div>
    <div>This is channel #{ channel }</div>
  </InsWrapper>
)

export const ChannelWelcome = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={300}>
      {props.enterChk ? (
      <Instruction txt={ `Hello, ${'user'}` }
                   channel={ props.match.params.channel }/>
               ) : null }
    </ReactCSSTransitionGroup>
  )
}
