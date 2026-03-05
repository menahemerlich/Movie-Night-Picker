import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pagas/HomePage'
import MovieDetailsPage from './pagas/MovieDetailsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
