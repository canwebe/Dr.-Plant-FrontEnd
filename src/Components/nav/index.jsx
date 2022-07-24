import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='wrapper'>
        <Link to='' className='logo'>
          Dr. Leafo <span>by CanWeBe</span>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
