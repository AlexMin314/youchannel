import React, { Component } from 'react'

import './Home.css'

import Texts from '../../Components/Texts'
import ChannelJoin from '../../Components/ChannelJoin'
import { LoginContatiner } from '../../Components/SocialLogin'

import socket from '../../API/socketAPI'


class Home extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    fetch('api/user')
      // .then(res => console.log(res))
    .then(res => res.json())
    .then(data => console.log(data))

    socket.emit('chat', 'hello')
  }

  render() {
    return (
      <div className='homeContainer'>
        <div className='homeContentWrapper'>

          <Texts type='title' txt={`YOUTALKS`} size={4} margin={20}/>
          <Texts txt={`Sharing and watching videos together.`}/>
          <Texts txt={`Join a channel to get started.`}/>

           <ChannelJoin
             placeholder={`Search / Join a channel`}
             onKeyPress={ (e) => e.key === 'Enter'
               ? this.props.history.push(`/${e.target.value.split(' ').join('')}`)
               : null}
           />

          <Texts txt={`Login with`} position='center'/>
          {LoginContatiner(['google','facebook', 'twitter', 'linkedin'])}

        </div>
        <footer>Alex Min's toy project!</footer>
      </div>
    )
  }
}

export default Home
