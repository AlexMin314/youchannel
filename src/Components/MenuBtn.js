import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'reactbulma'

export const MenuBtn = ({ name, right, center, middle, bottom }) => {
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
    <Button style={custumStyle} outlined primary large
            onClick={(e) => console.log(name)}>
      <Icon>
        <i className={`fa fa-lg fa-${name.toLowerCase()}`}/>
      </Icon>
    </Button>
  )
}
