import React, { Component } from 'react';
import { results } from './data'
import MoviesList from './components/MoviesList';
import MyMovies from './components/MyMovies';





class App extends Component {
  state = {
    movies: results
  }
  render() {
    const favorites = this.state.movies.filter(movie => movie.inFavorites)
    return (
      <div>
        <h1>All Movies</h1>
        <MoviesList movies={this.state.movies} />
        <h1>My Movies</h1>
        <MyMovies favorites={favorites} />
      </div>
    );
  }
}

export default App;
