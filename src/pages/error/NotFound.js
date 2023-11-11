import styled from 'styled-components'
import Button from '../../components/common/Button'
import bg from '../../asset/Home/bg.png'
import logo from '../../asset/Home/pc-logo.png'
import { Link } from 'react-router-dom'

const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

const ContentText = styled.div`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
`

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .logo {
    width: 45.6rem;
    cursor: pointer;
    position: absolute;
    left: -2.3rem;
    top: -20.4rem;
  }
`

const Home = () => {
  return (
    <HomeBackground>
      <MainBox>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ContentBox>
          <ContentText>잘못된 페이지 접근입니다.</ContentText>
          <Link to="/">
            <Button text="홈으로 이동" />
          </Link>
        </ContentBox>
      </MainBox>
    </HomeBackground>
  )
}

export default Home
