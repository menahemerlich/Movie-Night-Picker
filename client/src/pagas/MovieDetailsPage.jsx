import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/store'

function MovieDetailsPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const movies = useStore((state) => state.movies)
    const movie = movies.find((movie) => movie.imdbID === id)

    return (
        <div>
            <p onClick={() => navigate("/")}>🔙Back</p>
            <h1>{movie.Title}({movie.Year})</h1>
            <img src={movie.Poster} alt="" />
            <button onClick={() => navigate(`/movie/${id}/seats/${id}`)}>Choose Seats</button>
            <p>IMDb: {movie.imdbRating}</p>
            <p>Votes: {movie.imdbVotes}</p>
            <p>Metascore: {movie.Metascore}</p>
            <h3>Story</h3>
            <p>{movie.Plot}</p>
            <p>Movie ID</p>
            <p>{id}</p>
            <p>Year</p>
            <p>{movie.Year}</p>
            <button onClick={() => navigate(`/movie/${id}/seats/${id}`)}>Go to Seats</button>
            <button onClick={() => navigate("/")}>Back to list</button>

        </div>
    )
}

export default MovieDetailsPage