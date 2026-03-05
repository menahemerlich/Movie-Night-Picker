import React, { useEffect, useState } from 'react'
import { useStore } from '../store/store'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SeatsPage() {
    const navigate = useNavigate()
    const fetchSeats = useStore((state) => state.fetchSeats)
    const seats = useStore((state) => state.seats)
    const { id } = useParams()
    const [movieSeats, setMovieSeats] = useState([])
    const [selectedX, setSelectedX] = useState(null)
    const [selectedY, setSelectedY] = useState(null)

    useEffect(() => {
        fetchSeats()
    }, [])
    useEffect(() => {
        const localSeats = localStorage.getItem(id)
        if (localSeats) {
            setMovieSeats(JSON.parse(localSeats))
        } else {
            setMovieSeats(seats[id])
        }
    }, [seats, id])
    function takenSeate(item) {
        const updated = movieSeats.map(seat => {
            if (seat.id === item.id && !seat.isTaken) {
                return { ...seat, isTaken: true }
            }
            return seat
        })
        setMovieSeats(updated)
        setSelectedX(item.numberX)
        setSelectedY(item.numberY)
        localStorage.setItem(id, JSON.stringify(updated))
    }
    return (
        <div className='seatsPage'>
            <p className='back' onClick={() => navigate("/")}>🔙Back</p>

            <div>
                <h1>Choose your seats</h1>
                <p>Movie ID: {id}</p>
                {selectedX !== null && (
                    <p>Your place in the movie is in row {selectedX + 1}, place {selectedY + 1}.</p>
                )}
            </div>
            <div className='seats'>
                {movieSeats && movieSeats.map(item => {
                    return (
                        <div className={item.isTaken ? 'taken' : 'seate'}
                            key={item.id}
                            onClick={() => takenSeate(item)}>
                            <p>R{item.numberY + 1}</p>
                            <p>{item.numberX + 1}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SeatsPage