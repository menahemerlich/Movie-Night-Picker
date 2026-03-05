import React, { useEffect, useState } from 'react'

function useDebounced(value, delayMs) {
    const [debounced, satDebounced] = useState(value)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            satDebounced(value)
        }, delayMs)
        return ()=>{
            clearTimeout(timer)
        }
    }, [value, delayMs])
  return debounced
}

export default useDebounced