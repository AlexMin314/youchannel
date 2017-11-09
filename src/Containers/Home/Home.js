import React, { Component } from 'react'

import './Home.css'

import Texts from '../../Components/Texts'
import ChannelJoin from '../../Components/ChannelJoin'
import { SocialLogin, LoginContatiner } from '../../Components/SocialLogin'





class Home extends Component {
  constructor(props) {
    super(props)
  }

  onChange = (e) => {
    console.log(e.target.value)
  }

  onKeyPress = (e) => {
    console.log(e.key === 'Enter')
  }

  render() {
    return (
      <div className='homeContainer'>
        <div className='homeContentWrapper'>

          <Texts type='title' txt={`YOUTALKS`} size={4} margin={20}/>
          <Texts txt={`Collobarative youTube playlist.`}/>
          <Texts txt={`Join a channel to get started.`}/>

          <ChannelJoin placeholder={`Search / Join a channel`}
                       onChange={this.onChange}
                       onKeyPres={this.onKeyPress}/>

          <Texts txt={`Login with`} position='center'/>
          {LoginContatiner(['google','facebook', 'twitter', 'linkedin'])}
        </div>
        <footer>Alex Min's toy project!</footer>
      </div>
    )
  }
}

export default Home
