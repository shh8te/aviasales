import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Close = props => {
  return (
    <Line onClick={props.togglePopup}>
      <CurrentDirectory>{props.text}</CurrentDirectory>
    </Line>
  )
}

Close.propTypes = {
  togglePopup: PropTypes.func,
  text: PropTypes.string
}

export default Close

const Line = styled.div`
  @media (min-width: 320px) {
    grid-area: close;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: 50px;
    grid-template-areas:
      'arrow text';
    grid-gap: 5px;
    width: 100%;
    background-color: #2196F3;
    position: relative;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    display: none; 
  }
`

const CurrentDirectory = styled.span`
  grid-area: text;
  align-self: center;
  font-weight: bold;
  color: #FFF;
  &::before {
    content: '';
    grid-area: arrow;
    position: absolute;
    top: 20px;
    left: 5px;
    display: block;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border: solid #FFF;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
`
