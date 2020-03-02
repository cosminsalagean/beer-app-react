import axios from 'axios'
import {
  FETCH_BEER_DETAILS_START,
  FETCH_BEER_DETAILS,
  FETCH_BEER_DETAILS_SUCCESS,
  FETCH_BEER_DETAILS_ERROR
} from './actionTypes'
import { RESET_STATE, ROOT_URL } from '../constants'

const initialState = {
    deatails: {},
    isLoading: true,
    isError: false,
    errorMessage: ''
  }
  
  // Reducers
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEER_DETAILS:
        return {
          ...state,
          details: action.payload,
          isLoading: false
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
 
  // Get Beer Details
  export const fetchBeerDetails = id => (dispatch) => {
    axios.get(`${ROOT_URL}beers/${id}`)
      .then(result => dispatch({
        type: FETCH_BEER_DETAILS,
        payload: result.data[0]
      }))
      .catch(error => dispatch({
        type: FETCH_BEER_DETAILS_ERROR,
        payload: error.message
      }))
  }
  