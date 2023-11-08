import styled from 'styled-components'
import backgroundImg from '../../asset/Home/background.png'
import logo from '../../asset/Home/pc-logo.png'
import Button from '../../components/common/Button'

const HomeBackgroundStyledComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: bottom;
`

const HomeButtonBoxStyledComponent = styled.div`
  width: 166px;
`

const Home = () => {
  return (
    <HomeBackgroundStyledComponent>
      <HomeButtonBoxStyledComponent>
        <Button text="질문하러 가기" />
      </HomeButtonBoxStyledComponent>
      <img src={logo} alt="logo" />
    </HomeBackgroundStyledComponent>
  )
}

export default Home
