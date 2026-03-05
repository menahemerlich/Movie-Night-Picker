import React, { useEffect, useState } from 'react'
import { useStore } from '../store/store'
import { useParams } from 'react-router-dom'

function SeatsPage() {
    const fetchSeats = useStore((state) => state.fetchSeats)
    const seats = useStore((state) => state.seats)
    const { id } = useParams()
    const [movieSeats, setMovieSeats] = useState([])
    useEffect(() => {
        fetchSeats()
    }, [])
    useEffect(()=>{
        const localSeats = localStorage.getItem(id)
        if(localSeats){
            setMovieSeats(JSON.parse(localSeats))
        } else {
            setMovieSeats(seats[id])
        }
    }, [seats, id])
    function takenSeate(seatId){
        const updated = movieSeats.map(seat => {
            if (seat.id === seatId && !seat.isTaken){
                return {...seat, isTaken: true}
            }
            return seat
        })
        setMovieSeats(updated)
        localStorage.setItem(id, JSON.stringify(updated))
    }
    return (
        <div>
            <h1>Choose your seats</h1>
            <p>Movie ID: {id}</p>
            <div className='seats'>
                {movieSeats && movieSeats.map(item => {
                    return (
                        <div className={item.isTaken? 'taken':'seate'}
                         key={item.id}
                         onClick={()=> takenSeate(item.id)}>
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