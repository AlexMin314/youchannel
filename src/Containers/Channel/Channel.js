import React, { Component } from 'react'
import styled from 'styled-components'

import Spinner from '../../Components/Spinner/Spinner'
import { ChannelWelcome } from '../../Components/Instruction'
import { MenuBtn } from '../../Components/MenuBtn'

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
        <Spinner isFetching={ this.state.isFetching } />
        <ChannelWelcome { ...this.props } enterChk={ this.state.enterChk }/>

        {!this.state.enterChk ?  (
          <div>
            <MenuBtn name={'bars'} />
            <MenuBtn name={'home'} right />
            <MenuBtn name={'step-forward'} right middle />
            <MenuBtn name={'commenting'} right bottom />
          </div>
        ) : null}

      </div>
    )
  }
}

export default Channel
