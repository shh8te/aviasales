import { GET_DATA, CHANGE_CURRENCY, FILTER } from '../constants'
import axios from 'axios'
import dayjs from 'dayjs'

export const getData = () => {
  return {
    type: GET_DATA
  }
}

const shouldFetchRates = () => {
  const rates = JSON.parse(localStorage.getItem('rates'))
  const now = dayjs()

  if (!rates) {
    return true
  } else if (rates) {
    const lastFetched = dayjs(rates.time)

    return lastFetched.add(3, 'hour').isBefore(now)
  } else return false
}

export const getRates = () => {
  return async dispatch => {
    try {
      if (shouldFetchRates()) {
        const res = await axios.get(
          'https://openexchangerates.org/api/latest.json?app_id=46dc1d8ca0e34a0298a0773a1dab6c86'
        )

        localStorage.setItem(
          'rates',
          JSON.stringify({
            ...res.data.rates,
            time: dayjs()
          })
        )
      } else return
    } catch (e) {
      throw e
    }
  }
}

export const changeCurrency = toCurrency => {
  return {
    type: CHANGE_CURRENCY,
    payload: {
      currency: toCurrency
    }
  }
}

export const filterByStops = (value, checked, only) => {
  return {
    type: FILTER,
    payload: {
      value,
      checked,
      only
    }
  }
}
