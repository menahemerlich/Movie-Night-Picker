import React from 'react'
import { useStore } from '../store/store'

function Search() {
    const searchQuery = useStore((state)=> state.searchQuery)
    const setSearchQuery = useStore((state)=> state.setSearchQuery)
  return (
    <div>
        <input type="text" placeholder='Search movie...'
        value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default Search