import { GET_DATA, CHANGE_CURRENCY, FILTER } from '../constants'
import data from '../data.json'
import fx from 'money'

const initialState = {
  currency: 'RUB',
  tickets: [],
  filter: [true, true, true, false]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      let uniqueID = 0

      const tickets = data.tickets.map((item, i) => {
        return {
          ...item,
          uniqueID: uniqueID++
        }
      })

      return {
        ...state,
        tickets
      }
    }
    case CHANGE_CURRENCY: {
      fx.base = 'USD'
      fx.rates = JSON.parse(localStorage.getItem('rates'))

      const initialTickets = data.tickets

      const tickets = state.tickets.map((item, i) => {
        return {
          ...item,
          price: fx(initialTickets[i].price)
            .from('RUB')
            .to(action.payload.currency)
            .toFixed(0)
        }
      })

      return {
        ...state,
        currency: action.payload.currency,
        tickets
      }
    }
    case FILTER: {
      const noFilter = Array.from({ length: 4 }, item => true)

      if (action.payload.value === 'all') {
        return {
          ...state,
          filter: noFilter
        }
      }

      const filter = state.filter.slice()
      filter[action.payload.value] = action.payload.checked

      const result = () => {
        if (action.payload.only) {
          const onlyFilter = Array.from({ length: 4 }, item => false)
          onlyFilter[action.payload.value] = true

          return onlyFilter
        }
        return filter
      }

      return {
        ...state,
        filter: result()
      }
    }
    default:
      return state
  }
}

export default reducer
