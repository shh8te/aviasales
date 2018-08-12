import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = props => {
  return <Head>{props.heading}</Head>
}

Header.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Header

const Head = styled.h5`
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
  grid-area: header;
  justify-self: start;
  align-self: end;
  box-sizing: border-box;
  padding: 0 15px;
  font-size: 12px;
  line-height: 19px;
  font-weight: bold;
  color: #4A4A4A;
  margin: 0;
`
