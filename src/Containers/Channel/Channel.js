import React, { Component } from 'react'
import styled from 'styled-components'

import Spinner from '../../Components/Spinner/Spinner'
import { ChannelWelcome } from '../../Components/Instruction'
import { MenuBtn, HorizontalFab } from '../../Components/MenuBtn'
import SideNavBar from '../../Components/SideNavBar'
import {SideNav, SideNavItem, Button} from 'react-materialize'

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

  // 왼쪽 클릭하면 Fab 보여주고 유저 클릭하면 사이드 나브바?
  render() {
    return (
      <div className='channelContainer'>
        <Spinner isFetching={ this.state.isFetching } />
        <ChannelWelcome { ...this.props } enterChk={ this.state.enterChk }/>

        {!this.state.enterChk ?  (
          <div>
            <HorizontalFab/>
            <MenuBtn name={'bars'}/>
            <MenuBtn name={'step-forward'} right middle fn={e => console.log('next play')}/>
            <MenuBtn name={'commenting'} right bottom fn={e => console.log('open chat')}/>
          </div>
        ) : null}

      </div>
    )
  }
}

export default Channel
//<SideNavBar trigger={<div><MenuBtn name={'bars'}/></div>}/>
            // <MenuBtn name={'home'} right fn={e => this.props.history.push(`/`)}/>
