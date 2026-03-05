import React, { useEffect, useState } from 'react'
import { useStore } from '../store/store'
import useDebounced from '../hooks/useDebounced'

function Search() {
    const setSearchQuery = useStore((state) => state.setSearchQuery)
    const [value, setValue] = useState("")
    const debounced = useDebounced(value, 500)
    useEffect(()=>{
        setSearchQuery(debounced)
    }, [debounced])
    return (
        <div>
            <input type="text" placeholder='Search movie...'
                value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default Search