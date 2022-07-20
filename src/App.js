import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
