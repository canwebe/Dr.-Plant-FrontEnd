import { FaHome, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './homeBtn.css'

export default function HomeBtn({ type }) {
  const navigate = useNavigate()

  console.log(type, type === 'back')

  return (
    <div
      onClick={() => navigate(type === 'back' ? -1 : '/')}
      className='homeBtn'
    >
      {type === 'back' ? <FaArrowLeft /> : <FaHome />}
    </div>
  )
}
