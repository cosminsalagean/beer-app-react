/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListWrapper from '../list-wrapper';
// Create a class to BeersList Component
export default class BeerList extends Component {
  componentDidMount () {
    // Fetch all beers
    this.props.fetchBeers()
  }

  selectBeer(beer) {
    // Selected beer go to details
    this.props.history.push(`/beers/${beer.id}`)
  }

  addToFavourites(beer){
    // Selected beer for favorit list
   this.props.addToFavourites(beer);
  }

  removeFromFavourites(beer) {
      this.props.removeFromFavourites(beer);
  }

  isFavourite(beer) {
    return !!this.props.favourites.filter(fav => fav.id === beer.id).length
  }

  render () {
    return (
        <ListWrapper
            {...this.props}
            list={this.props.beersList}
            isFavourite={this.isFavourite.bind(this)}
            removeFromFavourites={this.removeFromFavourites.bind(this)}
            addToFavourites={this.addToFavourites.bind(this)}
            selectBeer={this.selectBeer.bind(this)}
            defaultList={true}
            title="List of beers"
        ></ListWrapper>
    )
  }
}

BeerList.propTypes = {
  fetchBeers: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  beersList: PropTypes.array,
  favoriteBeers: PropTypes.array
};