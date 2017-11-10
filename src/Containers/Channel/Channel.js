import React, { Component } from 'react'
import styled from 'styled-components'

import Spinner from '../../Components/Spinner/Spinner'
import { ChannelWelcome } from '../../Components/Instruction'

import './Channel.css'




class Channel extends Component {
  constructor(props) {
    super(props)
    //temp
    this.state = {
      isFetching: false,
      enterChk: true
    }
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ enterChk: false })
    }, 2000)
  }

  render() {
    return (
      <div className='channelContainer'>
        { this.state.isFetching ? <Spinner /> : null }
        <ChannelWelcome {...this.props} enterChk={this.state.enterChk} />

      </div>
    )
  }
}

export default Channel

// <ReactCSSTransitionGroup
//   transitionName="example"
//   transitionAppear={true}
//   transitionAppearTimeout={500}
//   transitionEnter={false}
//   transitionLeave={false}>
