import React from 'react'
import styled from 'styled-components'
// import { Button, Icon } from 'reactbulma'
import {SideNav, SideNavItem, Button} from 'react-materialize'

export const MenuBtn = ({ name, right, center, middle, bottom, fn }) => {
  const custumStyle = {
    borderRadius:'100%',
    border: 'none',
    position: 'absolute',
    transform: middle ? 'translateY(-100%)' : 'none',
    right: right ? 0 : 'none',
    left: center ? '50%' : 'none',
    top: middle ? '50%'  : 'none',
    bottom : bottom ? 0 : 'none',
    margin : '20px',
    transition: 'all 300ms ease-in-out'
  }
  return (
    <Button style={ custumStyle } floating large waves='light' className='transparent'
            onClick={fn}>
        <i className={`fa fa-lg fa-${name.toLowerCase()}`}/>
    </Button>
  )
}

export const HorizontalFab = () => {
  return (
    <div className="fixed-action-btn horizontal" style={{position:'absolute', bottom:'unset', top:'15px'}}>
       <a className="btn-floating btn-large red">
         <i className="large material-icons">mode_edit</i>
       </a>
       <ul>
         <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
         <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
         <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
         <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
       </ul>
     </div>
  )
}
