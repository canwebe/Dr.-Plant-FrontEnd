import React, { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import './Plant.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}

const WebcamCapture = () => {
  const [image, setImage] = useState()
  const webcamRef = useRef(null)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef])
  return (
    <div className='container'>
      <div className='cam'>
        <Webcam
          className='webcam'
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={200}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className='btns'>
        <button className='capture' onClick={capture}>
          detect
        </button>
        <br />
        <p>OR</p>

        <button className='upload'>upload</button>
      </div>
      <img src={image} alt='Screenshot' />
    </div>
  )
}

export default WebcamCapture
