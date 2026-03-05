import React from 'react'

function Movie({movie}) {
    console.log(movie);
    
  return (
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <p>{movie.runtime}</p>
        <p>{movie.genre}</p>
        <p>{movie.language}</p>
    </div>
  )
}

export default Movie