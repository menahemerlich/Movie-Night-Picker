import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pagas/HomePage'
import MovieDetailsPage from './pagas/MovieDetailsPage'
import SeatsPage from './pagas/SeatsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
        <Route path='/movie/:id/seats/:id' element={<SeatsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
