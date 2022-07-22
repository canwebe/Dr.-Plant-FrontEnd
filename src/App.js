import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Data } from './Pages/Home/Plantinfo'
import { useNavigate } from 'react-router'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav'
import { useEffect } from 'react'
import Plant from './Components/PlantImages/Plant'

function App() {
  let Navigate = useNavigate()
  useEffect(() => {
    Navigate('/detect')
  }, [])
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path='/detect' element={<Home />} />
        {Data.map((item) => (
          <Route
            path={`detect/${item.route}`}
            element={<Plant />}
            key={item.id}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App
