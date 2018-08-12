import React from 'react'
import styled from 'styled-components'

const PlaneIcon = props => {
  return (
    <Icon>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 9.1V7.8L7.52632 4.55V0.975C7.52632 0.4355 7.06789 0 6.5 0C5.93211 0 5.47368 0.4355 5.47368 0.975V4.55L0 7.8V9.1L5.47368 7.475V11.05L4.10526 12.025V13L6.5 12.35L8.89474 13V12.025L7.52632 11.05V7.475L13 9.1Z"
          transform="translate(13) rotate(90)"
          fill="#D2D5D6"
        />
      </svg>
    </Icon>
  )
}

export default PlaneIcon

const Icon = styled.div`
  &::before {
    content: '';
    display: block;      
    position: absolute;
    top: 6px;
    left: -97px;
    width: 96px;
    height: 1px;
    background-color: #D2D5D6;
  }
  grid-area: planeIcon;
  justify-self: end;
  position: relative;
  width: 20px;
  height: 20px;
`
