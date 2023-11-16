import { useEffect, useState } from 'react'
import { device } from '../../components/styles'
import styled from 'styled-components'
import InputField from '../../components/common/InputField'
import Button from '../../components/common/Button'
import bg from '../../asset/Home/bg.png'
import logo from '../../asset/Home/pc-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import useAsync from '../../hooks/useAsync'
import postSubject from '../../api/home'
import { useToast } from '../../hooks/useToast'

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
    width: 13.1rem;
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
    padding: 2.4rem;
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
  const [isValue, setIsValue] = useState(false)
  const [name, setName] = useState('')
  const [subjectPending, , subjectPost] = useAsync(postSubject)
  const nav = useNavigate()
  const { fireToast } = useToast()

  const handlePost = async () => {
    if (!isValue) return
    const result = await subjectPost(name)
    if (!result) return
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: result.id,
        name: result.name,
        imageSource: result.imageSource,
      })
    )
    nav(`/post/${result.id}/answer`, {
      state: {
        id: result.id,
        name: result.name,
        imageSource: result.imageSource,
      },
    })
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      nav('/list')
      fireToast({
        content:
          '이미 질문대상이 존재합니다. 삭제 후 새로운 질문 대상을 만들어주세요',
      })
    }
  }, [nav])

  if (subjectPending) return <div>로딩중입니다. 잠시만 기다려주십시요.</div>

  return (
    <HomeBackground>
      <MainBox>
        <Link to="/list">
          <ButtonBox>
            <Button text="질문하러 가기" />
          </ButtonBox>
        </Link>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <InputBox>
          <InputField
            isValue={isValue}
            setIsValue={setIsValue}
            setName={setName}
            onKeyDown={() => handlePost()}
          />
          <Button
            className="brown-button"
            brown
            text="질문 받기"
            isValue={isValue}
            onClick={() => handlePost()}
          />
        </InputBox>
      </MainBox>
    </HomeBackground>
  )
}

export default Home
