import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'reactbulma'

export const SocialLogin = ({ name }) => {
  const custumStyle = {
    borderRadius:'100%',
    backgroundColor: 'hsla(0,0%,94%,.3)',
    color: '#fff',
    transition: 'all .2s ease-in-out',
    margin: '5px'
  }
  return (
    <Button style={custumStyle} outlined
            onClick={(e) => console.log(name)}>
      <Icon>
        <i className={`fa fa-lg fa-${name.toLowerCase()}`}/>
      </Icon>
    </Button>
  )
}

export const LoginContatiner = (children) => {
  const renderElement = children.map((name) => <SocialLogin name={name} key={name}/>)
  const Logins = styled.div`
      display: flex;
      justify-content: center;
    `
  return (
    <Logins>{ renderElement }</Logins>
  )
}
