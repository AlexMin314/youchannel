import React, { Component } from 'react'

import './Home.css'

import Texts from '../../Components/Texts'
import ChannelJoin from '../../Components/ChannelJoin'
import { Input } from 'reactbulma'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='homeContainer'>
        <div className='homeContentWrapper'>
          <Texts type='title' txt={`YOUTALKS`} size={4} margin={20}/>
          <Texts txt={`Collobarative youTube playlist.`}/>
          <Texts txt={`Join a channel to get started.`}/>
          <ChannelJoin placeholder={`Search / Join a channel`}/>
          <Texts txt={`Login with`} position='center'/>
        </div>
        <footer>Created by Alex Min</footer>
      </div>
    )
  }
}

export default Home
