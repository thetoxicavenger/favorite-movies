import React from 'react'

const Movie = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.Poster} />
      </div>
    </div>
  )
}

export default Movie

