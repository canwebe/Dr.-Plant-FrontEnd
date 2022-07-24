import { Navigate, useNavigate, useParams } from 'react-router-dom'
import HomeBtn from '../../Components/HomeBtn'
import './detect.css'
import Webcam from 'react-webcam'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Detect() {
  const { id } = useParams()
  const videoConstraints = {
    width: 'auto',
    aspectRatio: 16 / 9,
  }
  const webcamref = useRef()
  const [image, setImage] = useState()

  const navigate = useNavigate()

  const handleTake = async () => {
    const src = webcamref.current.getScreenshot()
    setImage(src)
  }

  const handleChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setImage(url)
  }

  const handleRedir = () => {
    navigate('prediction', { state: { name: id, image } })
  }

  return (
    <div className='detectBody'>
      <div className='wrapper'>
        <h2 className='plantName'>{id.toUpperCase()} Plant</h2>
      </div>
      <Webcam
        ref={webcamref}
        videoConstraints={videoConstraints}
        screenshotFormat='image/jpeg'
        width={'100%'}
      />
      <div className='wrapper'>
        <div className='cameraBtnWrapper'>
          <button onClick={handleTake}>Take A Picture</button>
          or
          <input type='file' accept='images/*' onChange={handleChange} />
        </div>
        {image && (
          <>
            <img className='preview' src={image} alt='captured' />
            <button onClick={handleRedir} className='diagnoseBtn'>
              Diagnose
            </button>
          </>
        )}
      </div>

      <HomeBtn />
    </div>
  )
}
