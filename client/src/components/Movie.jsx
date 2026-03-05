import React from 'react'

function Movie({movie}) {
    console.log(movie);
    
  return (
    <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Language}</p>
    </div>
  )
}

export default Movie