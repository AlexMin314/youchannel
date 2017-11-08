import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  margin: 20px 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 50px;
  font-size: 1rem;
  transition: all 300ms ease-in-out;
`

const ChannelJoin = ({ placeholder }) => <Input placeholder={placeholder}/>

export default ChannelJoin
