
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from './actionTypes'

const initialState = {
    list: [],
    noFavourites: true,
    isError: false,
    errorMessage: ''
}

// Reducers
export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVOURITES: 
        return {
            ...state,
            noFavourites: false,
            list:[...state.list, action.payload]
        }
      case REMOVE_FROM_FAVOURITES:
          return {
              ...state,
              list: state.list.filter(item => item.id !== action.payload.id)
          }
      default:
        return state
    }
  }

//Add to favourites
export const addToFavourites = (beer) => (dispatch) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: beer
    });
}

//Remove from favourites
export const removeFromFavourites = (beer) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_FAVOURITES,
        payload: beer
    });
}