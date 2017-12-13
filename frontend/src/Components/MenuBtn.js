import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SideNav, SideNavItem, Button } from 'react-materialize'

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
    <Button
      style={ custumStyle }
      floating
      large
      waves='light'
      className='transparent'
      onClick={fn}
      icon='mode_edit'
    >
      {/*<i className={`fa fa-lg fa-${name.toLowerCase()}`}/>*/}
    </Button>
  )
}

export const HorizontalFab = () => {
  return (
    <Button floating fab='horizontal' icon='mode_edit' className='red' large style={{position:'absolute', bottom:'unset', top:'15px'}}>
    	<Button floating icon='insert_chart' className='red'/>
    	<Button floating icon='format_quote' className='yellow darken-1'/>
    	<Button floating icon='publish' className='green'/>
    	<Button floating icon='attach_file' className='blue'/>
    </Button>
  )
}
