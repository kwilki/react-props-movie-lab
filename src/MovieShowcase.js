import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((current, index) => <MovieCard 
        key={index}
        title={current.title}
        IMDBRating={current.IMDBRating}
        genres={current.genres}
        poster={current.poster}
      />)
  }

  render() {
    return <div id="movie-showcase">
      {this.generateMovieCards()}
    </div>
  }
}