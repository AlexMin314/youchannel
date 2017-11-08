import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'



const Texts = ({ type,
                 size=1,
                 margin=0,
                 weight='lighter',
                 txt='text box',
                 position='left' }) => {

  const TextBox = styled.div`
    font-family: ${ type === 'title' ? 'Open Sans, sans-serif' : 'inherit'};
    font-size: ${size}rem;
    font-weight: ${weight};
    text-align: ${position};
    margin: ${margin}px 0px;
  `

  return (
    <TextBox>
      {txt}
    </TextBox>
  )
}

export default Texts
