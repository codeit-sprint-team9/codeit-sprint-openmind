import { useEffect, useState } from 'react'
import Post from './Post'
import { useNavigate, useParams } from 'react-router-dom'

const AnswerPost = () => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const { id } = useParams()
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(false)
    if (userInfo) {
      if (userInfo.id.toString() !== id) navigate('/list')
    } else {
      navigate('/')
    }
    setIsPending(true)
  }, [])

  useEffect(() => {
    console.log(isPending)
  }, [isPending])

  if (isPending) return <Post state={'answer'} />
}

export default AnswerPost
