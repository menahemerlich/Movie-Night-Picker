import React from 'react'

function Movie({ movie }) {

    return (
        <div className='movieCard'>
            <div className='posterContainer'>
                <img className='poster' src={movie.Poster} alt="שגיאה בטעינת התמונה" />
                <h1 className='movieTitle'>{movie.Title}</h1>
            </div>
            <div>
                <div className='movieInfo'>
                    <div className="row">
                        <span className='label'>Year</span>
                        <span>{movie.Year}</span>
                    </div>
                    <div className="row">
                        <span className='label'>Runtime</span>
                        <span>{movie.Runtime}</span>
                    </div>
                    <div className="row">
                        <span className='label'>Genre</span>
                        <span>{movie.Genre}</span>
                    </div>
                    <div className="row">
                        <span className='label'>LanguageLanguage</span>
                        <span>{movie.Language}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie