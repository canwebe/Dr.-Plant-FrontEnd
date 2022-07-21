import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav'
import { useEffect } from 'react'
import Plant from './Components/PlantImages/Plant'

function App() {
  let Navigate = useNavigate()
  useEffect(() => {
    Navigate('/detect')
  }, [Navigate])
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path='/detect' element={<Home />}>
          <Route path='potato' element={<Plant />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
