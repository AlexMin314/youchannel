import React from 'react'

import './Home.css'

import Texts from '../../Components/Texts'
import ChannelJoin from '../../Components/ChannelJoin'
import { LoginContatiner } from '../../Components/SocialLogin'


const Home = (props) => {
  return (
    <div className='homeContainer'>
      <div className='homeContentWrapper'>

        <Texts type='title' txt={`YOUTALKS`} size={4} margin={20}/>
        <Texts txt={`Collobarative youTube playlist.`}/>
        <Texts txt={`Join a channel to get started.`}/>

         <ChannelJoin placeholder={`Search / Join a channel`}
           onKeyPress={ (e) => e.key === 'Enter'
             ? props.history.push(`/${e.target.value.split(' ').join('')}`)
             : null}/>

        <Texts txt={`Login with`} position='center'/>
        {LoginContatiner(['google','facebook', 'twitter', 'linkedin'])}

      </div>
      <footer>Alex Min's toy project!</footer>
    </div>
  )
}

export default Home


// <ChannelJoin placeholder={`Search / Join a channel`}
//   onKeyPress={ (e) => e.key === 'Enter' ? props.history.push(`/${e.target.value.split(' ').join('')}`) : null}/>
