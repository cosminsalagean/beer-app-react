import { combineReducers } from 'redux';
import beers from './beer-list';
import beerDetails from './beer-details';
import favourites from './favourites';

export default combineReducers({
  beers,
  beerDetails,
  favourites
});
