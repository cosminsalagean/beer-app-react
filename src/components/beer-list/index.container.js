import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BeerList from './index.component';
import { fetchBeers } from '../../modules/beer-list';
import { addToFavourites, removeFromFavourites } from '../../modules/favourites';

const mapStateToProps = ({ beers, favourites }) => ({
  	beersList: beers.list,
	isLoading: beers.isLoading,
	isError: beers.isError,
	errorMessage: beers.errorMessage,
	favourites: favourites.list || []
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
	fetchBeers,
	addToFavourites,
	removeFromFavourites
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);