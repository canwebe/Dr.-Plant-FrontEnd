import { Routes, Route } from 'react-router-dom'
import Nav from './Components/nav'
import Detect from './Pages/Detect'
import Home from './Pages/Home'
import Prediction from './Pages/Prediction'

function App() {
  return (
    <>
      <Nav />
      <div className='marginNav' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detect/:id' element={<Detect />} />
        <Route path='/detect/:id/prediction' element={<Prediction />} />
      </Routes>
    </>
  )
}

export default App
