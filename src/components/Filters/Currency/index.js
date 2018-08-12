import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCurrency } from '../../../actions'
import Header from '../Header/index'

class Currency extends Component {
  static = {
    currency: PropTypes.string.isRequired,
    changeCurrency: PropTypes.func.isRequired
  }

  render() {
    return (
      <StyledCurrency>
        <Header heading="ВАЛЮТА" />
        <InputRadio
          type="radio"
          value="RUB"
          id="RUB"
          onChange={() => this.props.changeCurrency('RUB')}
          checked={this.props.currency === 'RUB'}
        />
        <InputRadio
          type="radio"
          value="USD"
          id="USD"
          onChange={() => this.props.changeCurrency('USD')}
          checked={this.props.currency === 'USD'}
        />
        <InputRadio
          type="radio"
          value="EUR"
          id="EUR"
          onChange={() => this.props.changeCurrency('EUR')}
          checked={this.props.currency === 'EUR'}
        />
        <CurrencyControls>
          <label htmlFor="RUB">RUB</label>
          <label htmlFor="USD">USD</label>
          <label htmlFor="EUR">EUR</label>
        </CurrencyControls>
      </StyledCurrency>
    )
  }
}

export default connect(
  state => ({
    currency: state.currency
  }),
  { changeCurrency }
)(Currency)

const StyledCurrency = styled.div`
  grid-area: currency;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 36px 40px;
  grid-gap: 9px;
  grid-template-areas: 
  'header'
  'controls';
  //background-color: red;
`

const InputRadio = styled.input`
  display: none;
  & ~ div label {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #D2D5D6;
    //font-size: 12px;
    line-height: 40px;
    font-weight: bold;
    color: #2196F3;
    text-align: center;
    cursor: pointer;
    &:hover {
      border-color: #64B5F5;
      background-color: #F2FCFF;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
  &[id='RUB']:checked ~ div label[for='RUB'],
  &[id='USD']:checked ~ div label[for='USD'],
  &[id='EUR']:checked ~ div label[for='EUR'] {
    background-color: #2196F3;
    color: #FFF;
    border-color: #2196F3;
  }
`

const CurrencyControls = styled.div`
  @media (min-width: 320px) {
    font-size: 16px;    
  }
  @media (min-width: 1024px) {
    font-size: 12px;    
  }
  grid-area: controls;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  place-content: center;
  box-sizing: border-box;
  padding: 0 15px;
  //background-color: yellow;
`
