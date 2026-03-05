import React, { useEffect } from 'react'
import { useStore } from '../store/store'
import { useParams } from 'react-router-dom'

function SeatsPage() {
    const fetchSeats = useStore((state) => state.fetchSeats)
    const seats = useStore((state) => state.seats)
    const { id } = useParams()
    useEffect(() => {
        fetchSeats()
        localStorage.clear()
    }, [])
    localStorage.setItem(id, JSON.stringify(seats[id]))
    return (
        <div>
            <h1>Choose your seats</h1>
            <p>Movie ID: {id}</p>
            <div className='seats'>
                {seats[id] && seats[id].map(item => {
                    return (
                        <div className={item.isTaken? 'taken':'seate'} key={item.id}>
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