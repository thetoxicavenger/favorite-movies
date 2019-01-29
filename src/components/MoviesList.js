import React from 'react'
import Movie from './Movie';
import '../styles/MoviesList.css'

function MoviesList({ movies }) {
    const moviesList = movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)
    return (
        <div className='movies-list'>
            {moviesList}
        </div>
    )
}

export default MoviesList