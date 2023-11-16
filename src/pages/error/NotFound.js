import styled from 'styled-components'
import Button from '../../components/common/Button'
import bg from '../../asset/Home/bg.png'
import bgDark from '../../asset/Home/bg-dark.png'
import logo from '../../asset/Home/pc-logo.png'
import logoDark from '../../asset/Home/pc-logo-dark.png'
import { Link } from 'react-router-dom'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'
import { device } from '../../components/styles'

const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ $theme }) => ($theme === 'light' ? bg : bgDark)});
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
  color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'};
  @media ${device.mobile} {
    font-size: 2rem;
  }
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
    @media ${device.mobile} {
      width: 24.8rem;
      left: -2.1rem;
      top: -10.4rem;
    }
  }
`

const Home = () => {
  const theme = useRecoilValue(darkMode)
  return (
    <HomeBackground $theme={theme}>
      <MainBox>
        <Link to="/">
          {theme === 'light' ? (
            <img className="logo" src={logo} alt="logo" />
          ) : (
            <img className="logo" src={logoDark} alt="logo" />
          )}
        </Link>
        <ContentBox>
          <ContentText $theme={theme}>잘못된 페이지 접근입니다.</ContentText>
          <Link to="/">
            <Button text="홈으로 이동" />
          </Link>
        </ContentBox>
      </MainBox>
    </HomeBackground>
  )
}

export default Home
