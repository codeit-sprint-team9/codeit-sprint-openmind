import Button from '../../components/common/Button'
import bg from '../../asset/Home/bg.png'
import logo from '../../asset/Home/pc-logo.png'
import styled from 'styled-components'
import InputField from '../../components/common/InputField'
import { useState } from 'react'
import { device } from '../../components/styles'

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

const ButtonBox = styled.div`
  width: 16.6rem;
  position: fixed;
  top: 4.5rem;
  right: 12.5rem;
  @media ${device.tablet} {
    right: 4.4rem;
  }
  @media ${device.mobile} {
    position: static;
  }
`

const InputBox = styled.div`
  padding: 3.2rem;
  border-radius: 1.6rem;
  background: var(--gray-10, #fff);
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media ${device.mobile} {
    width: 30.5rem;
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
    @media ${device.mobile} {
      width: 24.8rem;
      order: -1;
    }
  }
`

const Home = () => {
  const [isValue, setIsValue] = useState(false)
  return (
    <HomeBackground>
      <MainBox>
        <ButtonBox>
          <Button text="질문하러 가기" />
        </ButtonBox>
        <img className="logo" src={logo} alt="logo" />
        <InputBox>
          <InputField isValue={isValue} setIsValue={setIsValue} />
          <Button brown text="질문 받기" isValue={isValue} />
        </InputBox>
      </MainBox>
    </HomeBackground>
  )
}

export default Home
