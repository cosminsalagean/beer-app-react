/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Toolbar from './toolbar'
import { Container, List, Item, Button, Name, Tag, Alert, Loading, Image } from './styles'; 

// Create a class to BeersList Component
export default class ListWrapper extends Component {
  renderListType(item) {
      if (this.props.defaultList) {
        return this.props.isFavourite(item) 
            ? <Button onClick={() => this.props.removeFromFavourites(item)} key={`rmfv-${item.id}`}>Remove from favourites</Button> 
            : <Button onClick={() => this.props.addToFavourites(item)} key={`addfv-${item.id}`}>Add to favourites</Button> 
      }

      return <Button onClick={() => this.props.removeFromFavourites(item)} key={`rmfv-${item.id}`}>Remove from favourites</Button>
  }

  render () {
    const { isLoading, isError } = this.props;

    return (
      <Container>
        <Toolbar
          title={this.props.title}
          isDetails={false}
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
          <List>
            {this.props.list.map(item => {
              console.log(item);
              const { id, name, tagline, image_url } = item;
              return (
                <Item>
                  <Name>
                    {name}
                  </Name>
                  <Image>
                    <img
                        src={image_url}
                        alt={name}
                        width="120"
                    />
                  </Image>
                  <Tag>
                    {tagline}
                  </Tag>
                  <Button onClick={() => this.props.selectBeer(item)} key={`sel-${id}`}>
                    See details
                  </Button>
                  {this.renderListType(item)}
                </Item>
              )
            })}
          </List>
        )}
      </Container>
    )
  }
}