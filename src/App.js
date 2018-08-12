import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData, getRates } from './actions'
import styled from 'styled-components'
import TicketsList from './components/TicketsList/index'
import Filters from './components/Filters/index'
import Logo from './components/Logo/index'
import MobileFilters from './components/Filters/MobileFilters/index'

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Logo />
        <Filters />
        <TicketsList />
        <MobileFilters />
      </StyledApp>
    )
  }

  componentDidMount() {
    this.props.getData()
    this.props.getRates()
  }
}

export default connect(
  null,
  { getData, getRates }
)(App)

const StyledApp = styled.div`
  display: grid;
  background-color: #F3F7FA;
  @media (min-width: 320px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'tickets';
  }
  @media (min-width: 1024px) {
    place-items: stretch;
    grid-template-columns: 232px 566px;
    grid-template-rows: 161px 331px 1fr;
    grid-gap: 0px 20px;
    grid-template-areas:
      'logo logo'
      'filters tickets'
      '. tickets';
    justify-content: center;
    align-content: stretch;
    padding: 100px;
    padding-top: 50px;
  }
`
