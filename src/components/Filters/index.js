import React from 'react'
import styled from 'styled-components'
import Currency from './Currency/index'
import Transfers from './Transfers/index'

const Filters = props => {
  return (
    <StyledFilters>
      <Currency />
      <Transfers />
    </StyledFilters>
  )
}

export default Filters

const StyledFilters = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    grid-area: filters;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 85px 209px;
    grid-template-areas: 
      'currency'
      'transfers';
    grid-gap: 32px;
    //background-color: orange;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`
