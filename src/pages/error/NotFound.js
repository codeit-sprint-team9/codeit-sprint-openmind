import { device } from '../../components/styles'
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
  padding: 3.2rem;
  border-radius: 1.6rem;
  background: var(--gray-10, #fff);
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media ${device.mobile} {
    width: 30.5rem;
    padding: 2.4rem;
  }
`

const ContentText = styled.div`
  font-size: 1.6rem;
  text-align: center;
  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  .logo {
    width: 45.6rem;
    cursor: pointer;
    @media ${device.mobile} {
      width: 24.8rem;
      order: -1;
    }
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
