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
            <p className='back' onClick={() => navigate("/")}>🔙Back</p>
            <h1 className='title'>{movie.Title}({movie.Year})</h1>
            <div className="detailsPage">

                <div className="posterSection">
                    <img className="posterImage" src={movie.Poster} alt={movie.Title}/>
                    <button className="chooseSeats" onClick={() => navigate(`/movie/${id}/seats/${id}`)}>
                        Choose Seats
                    </button>
                </div>
                <div className="infoSection">
                    <div className="ratingRow">
                        <span className="tag">IMDb: {movie.imdbRating}</span>
                        <span className="tag">Votes: {movie.imdbVotes}</span>
                        <span className="tag">Metascore: {movie.Metascore}</span>
                    </div>
                    <h2>Story</h2>
                    <p className="story">
                        {movie.Plot}
                    </p>
                    <div className="infoGrid">
                        <div className="infoBox">
                            <p>Movie ID</p>
                            <h3>{movie.imdbID}</h3>
                        </div>
                        <div className="infoBox">
                            <p>Year</p>
                            <h3>{movie.Year}</h3>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="seatsButton" onClick={() => navigate(`/movie/${id}/seats/${id}`)}>Go to Seats</button>
                        <button className="backButton" onClick={() => navigate("/")}>Back to list</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage