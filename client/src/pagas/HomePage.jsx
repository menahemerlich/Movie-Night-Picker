import React, { useEffect } from 'react'
import { useStore } from '../store/store'
import Movie from '../components/movie'
import Search from '../components/Search'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    const fetchMovies = useStore((state) => state.fetchMovies)
    const movies = useStore((state) => state.movies)
    const searchQuery = useStore((state) => state.searchQuery)
    const filteredMovies = movies.filter((movie) => {
        if (movie.Title.toLowerCase().includes(searchQuery.toLowerCase()) || movie.Genre.toLowerCase().includes(searchQuery.toLowerCase())) {
            return movie
        }
    })

    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <div>
            <h1>Movie Night</h1>
            <p>Search a movie and pick your seats</p>
            <Search />
            <div className='movies'>

            {filteredMovies.map((item) => {                
                return (
                    <div key={item.imdbID} onClick={() => navigate(`/movie/${item.imdbID}`)}>
                        <Movie movie={item} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default HomePage