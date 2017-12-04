import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  width: 100%;
  height: 1rem !important;
  margin: 20px 0px !important;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  padding: 0.5rem 1rem !important;
  outline: none;
  border-radius: 50px !important;
  font-size: 1rem;
  transition: all 300ms ease-in-out;
`

const ChannelJoin = ({ placeholder, onKeyPress }) => (
  <Input
    className='browser-default'
    browserDefault
    placeholder={ placeholder }
    onKeyPress={ onKeyPress }
  />
)

ChannelJoin.PropTypes = {
  placeholder: PropTypes.string,
  onKeyPress: PropTypes.function
}

export default ChannelJoin
