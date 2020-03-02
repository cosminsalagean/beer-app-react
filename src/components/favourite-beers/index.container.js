import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FavouriteBeers from './index.component';
import { removeFromFavourites } from '../../modules/favourites';

const mapStateToProps = ({ favourites }) => ({
    favouriteBeers: favourites.list,
	noFavourites: favourites.noFavourites,
	isError: favourites.isError,
	errorMessage: favourites.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
	removeFromFavourites
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavouriteBeers)
