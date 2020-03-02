/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import BeerList from './components/beer-list/index.container'
import BeerDetails from './components/beer-details/index.container'
import NotFound from './components/notFound'
import FavouriteBeers from './components/favourite-beers/index.container';
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeerList} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/favourites" component={FavouriteBeers} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default App
