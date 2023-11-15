import Button from '../../components/common/Button'
import { ReactComponent as LogoImage } from '../../asset/logo.svg'
import { device } from '../../components/styles'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [isLogin] = useState(user ? true : false)
  const userId = user?.id

  const navigate = useNavigate()

  const onClickButton = () => {
    if (isLogin) {
      navigate(`/post/${userId}/answer`)
      return
    }
    alert('로그인 후 접근할 수 있습니다.')
    navigate('/')
  }

  const onClickLogo = () => {
    if (isLogin) {
      alert('이미 로그인 되어있습니다.')
      return
    }
    navigate('/')
  }

  return (
    <>
      <HeaderTopContainer>
        <LogoImage className="logo" onClick={onClickLogo} />
        <div className="answer-button">
          <Button text="답변하러 가기" onClick={onClickButton} isValue={true} />
        </div>
      </HeaderTopContainer>

      <HeaderBottomContainer>
        <div className="answer-who">누구에게 질문할까요?</div>
      </HeaderBottomContainer>
    </>
  )
}

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 13rem;
  align-items: center;

  .logo {
    cursor: pointer;
  }
  .answer-button {
    width: 16.8rem;
  }

  @media ${device.tablet} {
    padding: 4rem 5rem;
  }
  @media ${device.mobile} {
    gap: 2rem;
    flex-direction: column;
    align-items: center;

    .answer-button {
      width: 13.1rem;
    }
  }
  #OPENMIND > path {
    fill: white;
  }
  #Group 10 > path {
    stroke: white;
  }
  #OPENMIND_2 > path {
    fill: white;
  }
`

const HeaderBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1.2rem;

  .answer-who {
    // color: var(--gray-60, #000);
    color: var(--gray-10);
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
  }

  @media ${device.mobile} {
    flex-direction: row;
    gap: 4.2rem;
    margin-top: 1.2rem;
    .answer-who {
      font-size: 2.4rem;
    }
  }
`

export default Header
