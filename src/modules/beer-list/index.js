import axios from 'axios'
import {
  FETCH_BEERS,
  FETCH_BEERS_FAILED
} from './actionTypes'

import { RESET_STATE, ROOT_URL } from '../constants'

// Create a state in store
const initialState = {
  list: [],
  isLoading: true,
  isError: false,
  errorMessage: ''
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        ...state,
        list: action.payload.data,
        isLoading: false
      }

    case FETCH_BEERS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        isError: true
      }
    case RESET_STATE:
      return initialState

    default:
      return state
  }
}

// Reset state
export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE
  })
}

// Get All Beers
export const fetchBeers = () => (dispatch) => {
  axios.get(`${ROOT_URL}beers`)
    .then(result => dispatch({
      type: FETCH_BEERS,
      payload: result
    }))
    .catch(error => dispatch({
      type: FETCH_BEERS_FAILED,
      payload: error.message
    }))
}


