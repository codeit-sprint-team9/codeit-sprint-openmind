import Badge from '../../components/common/Badge'
import FloatingButton from '../../components/common/FloatingButton'
import InputField from '../../components/common/InputField'
import InputTextArea from '../../components/common/InputTextArea'
// import Reaction from '../../components/common/Reaction'
import Toast from '../../components/common/Toast'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>home</h1>
      <InputField />
      <InputTextArea />
      <Badge isAnswered={true} />
      <FloatingButton />
      <Toast />
      {/* <Reaction like="5" disLike="2" /> */}
    </div>
  )
}

export default Home
