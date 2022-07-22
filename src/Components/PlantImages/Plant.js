import React, { useEffect, useRef, useState } from 'react'
import './Plant.css'

const CamCapture = () => {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const [image, setImage] = useState()

  useEffect(() => {
    getVideo()
  }, [videoRef])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch((err) => {
        console.error('error:', err)
      })
  }

  const takePhoto = () => {
    let photo = photoRef.current

    const data = photo.toDataURL('image/jpeg')

    console.warn(data)
    setImage(data)
  }

  return (
    <div className='container'>
      <div className='cam-video'>
        <video ref={videoRef} className='player' />
      </div>
      <div className='btns'>
        <button className='capture' onClick={takePhoto}>
          detect
        </button>
        <br />
        <p>OR</p>
        <button className='upload'>upload</button>
      </div>
      <img src={image} alt='screenshot'></img>
    </div>
  )
}

export default CamCapture
