import { useState } from 'react'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import Dropdown from '../../components/common/Dropdown'
import Edit from '../../components/common/Edit'
import FloatingButton from '../../components/common/FloatingButton'
import InputField from '../../components/common/InputField'
import InputTextArea from '../../components/common/InputTextArea'
import Reaction from '../../components/common/Reaction'
import Toast from '../../components/common/Toast'
import PostCard from '../../components/postCard/PostCard'
const Home = () => {
  const [isValue, setIsValue] = useState(false)
  return (
    <div>
      <h1>home</h1>
      <InputField isValue={isValue} setIsValue={setIsValue} />
      <InputTextArea isValue={isValue} setIsValue={setIsValue} />
      <Badge isAnswered={true} />
      <Badge isAnswered={false} />
      <FloatingButton />
      <Toast />
      <Reaction like="5" disLike="2" />
      <Reaction />
      <Dropdown />
      <Edit />
      <Button brown isValue={isValue} />
      <Button />
      <PostCard />
    </div>
  )
}

export default Home
