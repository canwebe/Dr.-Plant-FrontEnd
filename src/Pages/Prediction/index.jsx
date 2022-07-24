import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HomeBtn from '../../Components/HomeBtn'
import './prediction.css'

export default function Prediction() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const { name, image } = location.state
  const handleData = async () => {
    const json = await fetch(
      'https://powerful-shelf-58901.herokuapp.com/disease/search/' +
        'Potato_Late_blight'
    )
    const [res] = await json.json()
    setData(res)
    setIsLoading(false)
  }
  useEffect(() => {
    handleData()
  }, [])
  return (
    <div className='wrapper'>
      <h2 className='plantNameP'>{name}</h2>
      <img className='preview' src={image} alt={name} />
      <div className='prediction'>
        <h2>Prediction</h2>
        {isLoading ? (
          <p className='loadingText'>loading...</p>
        ) : (
          <>
            <p className='predictionP'>
              Disease : <span>Healthy</span>
            </p>
            <p className='predictionP'>
              Confidence : <span>99.3%</span>
            </p>
            <hr />
            <h3>Information :</h3>
            <p>{data.desc}</p>
            <h3>Cause :</h3>
            <p>{data.cause}</p>
            <h3>Remedy :</h3>
            <p>{data.remedy}</p>
          </>
        )}
      </div>

      <HomeBtn type='back' />
    </div>
  )
}
