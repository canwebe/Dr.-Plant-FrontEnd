import React from 'react'
import './Home.css'
import potato from '../Assets/potato.webp'
import tomato from '../Assets/tomato.webp'
import onion from '../Assets/onion.webp'
import beetroot from '../Assets/beetroot.webp'
import garlic from '../Assets/garlic.webp'
import carrot from '../Assets/carrot.webp'

const Home = () => {
  return (
    <>
      <h3 className='header'>Select the Plant</h3>
      <div className='Wrapper'>
        <div className='potato'>
          <img src={potato} alt='potato-img'></img>
          <p>POTATO</p>
        </div>
        <div className='tomato'>
          <img src={tomato} alt='tomato-img'></img>
          <p>TOMATO</p>
        </div>
        <div className='onion'>
          <img src={onion} alt='onion-img'></img>
          <p>ONION</p>
        </div>
        <div className='beet-root'>
          <img src={beetroot} alt='beetroot-img'></img>
          <p>BEET ROOT</p>
        </div>
        <div className='garlic'>
          <img src={garlic} alt='garlic-img'></img>
          <p>GARLIC</p>
        </div>
        <div className='carrot'>
          <img src={carrot} alt='carrot-img'></img>
          <p>CARROT</p>
        </div>
      </div>
    </>
  )
}

export default Home
