import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { plantName } from '../../Data/plantNames'
import GetPhoto from '../../Components/getPhoto'

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='plantListWrapper'>
        {plantName.map((item, i) => (
          <Link className='plantCard' key={i} to={`/detect/${item}`}>
            <img src={GetPhoto(item)} alt={item} />
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
