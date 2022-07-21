import React from 'react'
import './Home.css'
import { Data } from './Plantinfo'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h3 className='header'>Select the Plant</h3>
      <div className='Wrapper'>
        {Data.map((item) => (
          <div className={item.className} key={item.id}>
            <Link to={{ pathname: `${item.route}` }}>
              <img src={item.img.src} alt={item.alt}></img>
              <p>{item.Name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
