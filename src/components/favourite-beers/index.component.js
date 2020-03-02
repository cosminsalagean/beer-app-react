/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListWrapper from '../list-wrapper';

// Create a class to BeersList Component
export default class FavouriteBeers extends Component {
  selectBeer(beer) {
    // Selected beer go to details
    this.props.history.push(`/beers/${beer.id}`)
  }

  removeFromFavourites(beer) {
    this.props.removeFromFavourites(beer);
  }

  render () {
    return (
        <ListWrapper
            {...this.props}
            list={this.props.favouriteBeers}
            removeFromFavourites={this.removeFromFavourites.bind(this)}
            selectBeer={this.selectBeer.bind(this)}
            title="List of favourite beers"
        ></ListWrapper>
    )
  }
}

FavouriteBeers.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  favoriteBeers: PropTypes.array
};