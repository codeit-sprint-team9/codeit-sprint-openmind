import Button from '../../components/common/Button'
import bg from '../../asset/Home/bg.png'
import logo from '../../asset/Home/pc-logo.png'

const Home = () => {
  return (
    <div>
      <img src={bg} alt="bg" />
      <img src={logo} alt="logo" />
      <Button text="질문하러 가기" />
    </div>
  )
}

export default Home
