import { NavLink } from 'react-router-dom'
import './bottomBar.css'

export default function BottomBar() {
  return (
    <div className='bottomBar'>
      <div className='bottomBarWrapper'>
        <NavLink to=''>Home</NavLink>
        <NavLink to='info'>Info</NavLink>
        <NavLink to='about'>About</NavLink>
      </div>
    </div>
  )
}
