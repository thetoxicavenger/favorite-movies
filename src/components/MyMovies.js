import React from 'react'
import FavoriteMovie from './FavoriteMovie';

const MyMovies = props => {
    const myMovies = props.favorites.map(favorite => {
        return <FavoriteMovie key={favorite.imdbID} title={favorite.Title} />
    })
    return (
        <div>
            <ul>
               {myMovies}
            </ul>
        </div>
    )
}

export default MyMovies