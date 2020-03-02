import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchBeerDetails,
  resetState
} from '../../modules/beer-details'

import BeerDetails from './index.component';

const mapStateToProps = ({ beerDetails }) => ({
    beerDetails: beerDetails.details,
    isLoading: beerDetails.isLoading,
    isError: beerDetails.isError,
    errorMessage: beerDetails.errorMessage
  })
  
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBeerDetails,
    resetState
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerDetails)
