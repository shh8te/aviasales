import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Ticket from './Ticket/index'
import Close from '../Close/index'

class TicketsList extends Component {
  static = {
    tickets: PropTypes.array.isRequired,
    filter: PropTypes.array.isRequired
  }

  render() {
    return (
      <StyledTicketsList>
        <Close text={'Билеты'} />
        <Tickets>{this.renderTickets()}</Tickets>
      </StyledTicketsList>
    )
  }

  renderTickets = () => {
    const tickets = this.props.tickets
      .filter(item => {
        return this.props.filter[item.stops]
      })
      .map(item => {
        return <Ticket uniqueID={item.uniqueID} key={item.uniqueID} />
      })

    return tickets
  }
}

export default connect(state => ({
  tickets: state.tickets,
  filter: state.filter
}))(TicketsList)

const StyledTicketsList = styled.div`
  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      'close'
      'ticketsList';
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'ticketsList';    
  }
  grid-area: tickets;
  //background-color: red;
`

const Tickets = styled.div`
  grid-area: ticketsList;
`
