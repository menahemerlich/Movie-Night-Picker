import React from 'react'

function Movie({ movie }) {

    return (
        <div >
            <img src={movie.Poster} alt="" />
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Language}</p>
        </div>
    )
}

export default Movie