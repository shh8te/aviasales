import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Currency from '../Currency/index'
import Transfers from '../Transfers/index'
import Close from '../../Close/index'

class MobileFilters extends Component {
  state = {
    showPopup: false
  }

  render() {
    return (
      <Fragment>
        {this.state.showPopup ? (
          <Popup>
            <Close
              togglePopup={this.togglePopup}
              showPopup={this.state.showPopup}
              text={'Фильтры'}
            />
            <Filters>
              <Currency />
              <Transfers />
            </Filters>
          </Popup>
        ) : (
          <Button onClick={this.togglePopup}>Фильтровать</Button>
        )}
      </Fragment>
    )
  }

  togglePopup = () => {
    this.setState(prevProps => ({
      showPopup: !prevProps.showPopup
    }))
  }
}

export default MobileFilters

const Button = styled.button`
  @media (min-width: 320px) {
    display: block;
    width: 170px;
    font-size: 16px;
    line-height: 43px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
    background-color: #2196F3;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid #1f84d4;
    border-radius: 30px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const Popup = styled.div`
  @media (min-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #F3F7FA;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      'close'
      'filters';
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const Filters = styled.div`
  grid-area: filters;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 85px 1fr;
  grid-template-areas: 
    'currency'
    'transfers';
  grid-gap: 32px;
  font-family: 'Open Sans';
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);  
`
