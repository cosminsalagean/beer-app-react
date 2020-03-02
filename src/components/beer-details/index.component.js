/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Toolbar from '../../components/toolbar'
import Beer from './beer'
import { Container, Alert, Loading } from '../styles';

// Create a class to BeerDetails Component
export default class BeerDetails extends Component {
  componentDidMount () {
    // Get the params id
    const beerId = this.props.match.params.id
    // Pass id to fetch beer details in API
    this.props.fetchBeerDetails(beerId)
  }

  componentWillUnmount () {
    // Reset state to component unmount
    this.props.resetState()
  }

  render () {
    const beer = this.props.beerDetails || ''
    const isLoading = this.props.isLoading
    const isError = this.props.isError
    return (
      <Container>
        <Toolbar
          title="Beer Details"
          isDetails
        />
        {isError ? (
          <Alert>
            {this.props.errorMessage}
          </Alert>
        ) : ''}
        {isLoading ? (
          <Loading>
            Loading...
          </Loading>
        ) : (
          <Beer
            name={beer.name}
            image_url={beer.image_url}
            tagline={beer.tagline}
            description={beer.description}
          />
        )}
      </Container>
    )
  }
}

BeerDetails.propTypes = {
    fetchBeerDetails: PropTypes.func,
    resetState: PropTypes.func,
    match: PropTypes.object,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    beerDetails:  PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ])
  }