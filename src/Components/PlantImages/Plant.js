import React from 'react'

const Plant = () => {
  return (
    <div className='Upload-sec'>
      <div className='sacnner'></div>
      <div className='Buttons'>
        <button className='detectBtn'>Detect</button>
        <button className='uploadBtn'>Upload{console.log('uploadBtn')}</button>
      </div>
    </div>
  )
}

export default Plant
