import React from 'react'
import styled from 'styled-components'
import Header from '../Header/index'
import TransfersLine from './TransfersLine/index'

const Transfers = props => {
  return (
    <StyledTransfers>
      <Header heading="КОЛИЧЕСТВО ПЕРЕСАДОК" />
      <TransfersBox>
        {['all', 0, 1, 2, 3].map(item => (
          <TransfersLine id={item} value={item} key={item} />
        ))}
      </TransfersBox>
    </StyledTransfers>
  )
}

export default Transfers

const StyledTransfers = styled.div`
  grid-area: transfers;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 19px 1fr;
  grid-template-areas:
  'header'
  'transfersBox';
  grid-gap: 5px;
  font-size: 13px;
`

const TransfersBox = styled.div`
  @media (min-height: 320px) {
    grid-area: transfersBox;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
    font-weight: normal;
    color: #4A4A4A;
  }
  @media (min-height: 1024px) {
    grid-area: transfersBox;
    display: grid;
    grid-template-rows: repeat(5, 36px);
    grid-template-columns: 1fr;
    font-weight: normal;
    color: #4A4A4A;
  }
`
