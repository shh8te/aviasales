import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterByStops } from '../../../../actions'

class TransfersLine extends Component {
  static = {
    filter: PropTypes.array.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }

  render() {
    return (
      <Line>
        <Checkbox
          type="checkbox"
          id={this.props.id}
          value={this.props.value}
          checked={this.getChecked()}
          onChange={event =>
            this.props.filterByStops(event.target.value, event.target.checked)
          }
        />
        <label htmlFor={this.props.id}>
          <span />
          <Text>{this.getTransferText()}</Text>
          {this.props.value !== 'all' && (
            <OnlyButton
              onClick={event =>
                this.props.filterByStops(
                  event.target.parentElement.previousElementSibling.value,
                  event.target.parentElement.previousElementSibling.checked,
                  true
                )
              }
            >
              ТОЛЬКО
            </OnlyButton>
          )}
        </label>
      </Line>
    )
  }

  getTransferText = () => {
    switch (this.props.value) {
      case 'all':
        return 'Все'
      case 0:
        return 'Без пересадок'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      case 3:
        return '3 пересадки'
      default:
        throw new Error('wrong filter value')
    }
  }

  getChecked = () => {
    if (this.props.value === 'all') {
      return this.props.filter.every(item => item === true)
    } else return this.props.filter[this.props.id]
  }
}

export default connect(
  (state, ownProps) => ({
    filter: state.filter,
    id: ownProps.id,
    value: ownProps.value
  }),
  { filterByStops }
)(TransfersLine)

const Line = styled.div`
  &:hover button {
    visibility: visible;
  }
  &:hover {
    background-color: #F1FCFF;
  }
  padding-left: 15px;
  padding-right: 15px;
`

const Checkbox = styled.input`
  & ~ label {
    @media (min-width: 320px) {
      display: grid;
      grid-template-columns: 29px 1fr 46px;
      grid-template-rows: 1fr;
      grid-template-areas:
      'checkbox text button';
      align-items: center;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 29px 1fr 46px;
      grid-template-rows: 1fr;
      grid-template-areas:
      'checkbox text button';
      align-items: center;
      width: 100%;
      height: 100%;
      line-height: 36px;      
    }
  }
  & ~ label span {
    grid-area: checkbox;
    position: relative;
    width: 19px;
    height: 19px;
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid #D2D5D6;
    border-radius: 3px;
    padding-right: 10px;
    justify-self: start;
  }
  &:checked ~ label span {
    display: block;
    position: relative;
    width: 19px;
    height: 19px;
    background-color: #F2FCFF;
    box-sizing: border-box;
    border: 1px solid #2196F3;
    border-radius: 3px;
  }
  &:checked ~ label span::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 4px;
    width: 3px;
    height: 6px;
    border: solid #2196F3;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  display: none;
`

const Text = styled.p`
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 13px;    
  }
  grid-area: text;
  margin: 0;
`

const OnlyButton = styled.button`
  grid-area: button;
  justify-self: end;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  font-size: 11px;
  line-height: 36px;
  font-weight: bold;
  color: #2196F3;
  @media (min-width: 320px) {
    visibility: visible;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    visibility: hidden;    
    font-size: 11px;
  }
`
