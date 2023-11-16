import { useEffect, useState } from 'react'
import Post from './Post'
import { useNavigate, useParams } from 'react-router-dom'
import { useToast } from '../../hooks/useToast'

const AnswerPost = () => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const { id } = useParams()
  const [isPending, setIsPending] = useState(false)
  const { fireToast } = useToast()

  useEffect(() => {
    setIsPending(false)
    if (userInfo) {
      if (userInfo.id.toString() !== id) {
        fireToast({ content: '로그인된 계정이 아닙니다.' })
        navigate('/list')
      }
    } else {
      navigate('/')
      fireToast({ content: '로그인 후 접근할 수 있습니다.' })
    }
    setIsPending(true)
  }, [])

  if (isPending) return <Post state={'answer'} />
}

export default AnswerPost
