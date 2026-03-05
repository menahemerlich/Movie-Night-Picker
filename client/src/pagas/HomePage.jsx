import React, { useEffect } from 'react'
import { useStore } from '../store/store'
import Movie from '../components/movie'

function HomePage() {
    const fetchMovies = useStore((state) => state.fetchMovies)
    const movies = useStore((state) => state.movies)
    console.log(movies);
    
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <div>
            {movies.map((item, index) => {
                return (
                    <div key={index}>
                        <Movie movie={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage