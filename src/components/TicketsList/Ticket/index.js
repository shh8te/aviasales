import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import PlaneIcon from './PlaneIcon/index'

dayjs.locale('ru')

class Ticket extends Component {
  static = {
    ticket: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired
  }

  render() {
    return (
      <StyledTicket>
        <Buy>
          <CarrierLogo>{this.getCarrierLogo()}</CarrierLogo>
          <StyledLink>
            <StyledPrice>
              Купить <br />
              за {this.props.ticket.price}
              {this.getCurrencySign()}
            </StyledPrice>
          </StyledLink>
        </Buy>
        <Main>
          <Header>
            <DepartureTime>{this.props.ticket.departure_time}</DepartureTime>
            <Stops>
              <span>{this.getStops()}</span>
              <PlaneIcon />
            </Stops>
            <ArrivalTime>{this.props.ticket.arrival_time}</ArrivalTime>
          </Header>
          <Departure>
            <Place>{`${this.props.ticket.origin}, ${
              this.props.ticket.origin_name
            }`}</Place>
            <Date>
              {`${dayjs(this.props.ticket.departure_date).format(
                'D MMM YYYY'
              )}, ${dayjs(this.props.ticket.departure_date).format('dd')}`}
            </Date>
          </Departure>
          <Arrival>
            <Place>
              {`${this.props.ticket.destination}, ${
                this.props.ticket.destination_name
              }`}
            </Place>
            <Date>
              {`${dayjs(this.props.ticket.arrival_date).format(
                'D MMM YYYY'
              )}, ${dayjs(this.props.ticket.arrival_date).format('dd')}`}
            </Date>
          </Arrival>
        </Main>
      </StyledTicket>
    )
  }

  getStops = () => {
    switch (this.props.ticket.stops) {
      case 0:
        return 'прямой'
      case 1:
        return `${this.props.ticket.stops} пересадка`
      case 2:
      case 3:
        return `${this.props.ticket.stops} пересадки`
      default:
        throw new Error('wrong stops number')
    }
  }

  getCarrierLogo = () => {
    switch (this.props.ticket.carrier) {
      case 'TK':
        return (
          <img
            src={require('../../../img/TK.png')}
            alt="TK"
            width="120"
            height="35"
          />
        )
      case 'SU':
        return (
          <img
            src={require('../../../img/SU.png')}
            alt="SU"
            width="120"
            height="35"
          />
        )
      case 'S7':
        return (
          <img
            src={require('../../../img/S7.png')}
            alt="S7"
            width="120"
            height="35"
          />
        )
      case 'BA':
        return (
          <img
            src={require('../../../img/BA.png')}
            alt="BA"
            width="120"
            height="35"
          />
        )
      default:
        throw new Error('wrong carrier string')
    }
  }

  getCurrencySign = () => {
    switch (this.props.currency) {
      case 'RUB':
        return '₽'
      case 'USD':
        return '$'
      case 'EUR':
        return '€'
      default:
        throw new Error('wrong currency string')
    }
  }
}

export default connect((state, ownProps) => ({
  ticket: state.tickets[ownProps.uniqueID],
  currency: state.currency
}))(Ticket)

const StyledTicket = styled.div`
  @media (min-width: 320px) {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    &:last-child {
      margin-bottom: 70px;
    }
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.5fr;
    grid-template-areas:
      'buy'
      'main';
    padding: 16px 19px;
  }
  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    }
    display: grid;
    grid-template-columns: 200px 365px;
    grid-template-rows: 161px;
    grid-template-areas:
      'buy main';
  }
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #FFFFFF;
`

const Buy = styled.div`
  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'buyLink carrierLogo';
    grid-gap: 10px;
    box-sizing: border-box;
    padding: 15px 0;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 35px 56px;
    grid-template-areas:
      'carrierLogo'
      'buyLink';
    grid-gap: 20px;
    box-sizing: border-box;
    padding: 25px 20px;
    border-right: 2px solid #ECEFF1;    
  }
`

const CarrierLogo = styled.div`
  @media (min-width: 320px) {
    justify-self: end;
    align-self: start;
  }
  @media (min-width: 1024px) {
    place-self: center;    
  }
  grid-area: carrierLogo;
`

const StyledLink = styled.a`
  &:hover {
    background-color: #FF8124;
  }
  grid-area: buyLink;
  display: grid;
  width: 160px;
  height: 56px;
  font-size: 16px;
  line-height: 22px;
  color: #FFF;
  background-color: #FF6D00;
  border-radius: 5px;
  box-shadow: 0px 1px #D64D08;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const StyledPrice = styled.span`
  place-self: center;
  text-align: center;
`

const Main = styled.div`
  @media (min-width: 320px) {
    padding: 20px 0;
  }
  @media (min-width: 1024px) {
    padding: 20px 25px;    
  }
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 46px 1fr;
  grid-template-areas:
    'header header header'
    'departure . arrival';
  //grid-row-gap: 10px;
  box-sizing: border-box;
  //background-color: red;
`

const Header = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 116px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'departureTime stops arrivalTime';
  align-items: start;
  //background-color: orange;
`

const DepartureTime = styled.span`
  grid-area: departureTime;
  justify-self: start;
  font-size: 32px;
  color: #4A4A4A;
  //background-color: yellow;
`

const ArrivalTime = styled.span`
  grid-area: arrivalTime;
  justify-self: end;
  font-size: 32px;
  color: #4A4A4A;
  //background-color: yellow;
`

const Stops = styled.span`
  grid-area: stops;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    'stops'
    'planeIcon';
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  color: #8B9497;
  & span {
    grid-area: stops;
    justify-self: center;
    align-self: end;
  }
`

const Departure = styled.div`
  grid-area: departure;
  justify-self: start;
  font-size: 12px;
`

const Arrival = styled.div`
  grid-area: arrival;
  justify-self: end;
  font-size: 12px;
`

const Place = styled.div`
  font-weight: bold;
  color: #4A4A4A;
`

const Date = styled.div`
  font-weight: normal;
  color: #4A4A4A;
`
