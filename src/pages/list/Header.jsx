import Button from '../../components/common/Button'
import { ReactComponent as LogoImage } from '../../asset/logo.svg'
import { device } from '../../components/styles'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'
import ToggleButton from '../../components/common/ToggleButton'
import { useToast } from '../../hooks/useToast'

function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [isLogin] = useState(user ? true : false)
  const userId = user?.id
  const theme = useRecoilValue(darkMode)
  const { fireToast } = useToast()

  const navigate = useNavigate()

  const onClickButton = () => {
    if (isLogin) {
      navigate(`/post/${userId}/answer`)
      return
    }
    fireToast({ content: '로그인 후 접근할 수 있습니다.' })
  }

  const onClickLogo = () => {
    if (isLogin) {
      fireToast({ content: '이미 로그인 되어있습니다.' })
      return
    }
    navigate('/')
  }

  return (
    <>
      <HeaderTopContainer $theme={theme}>
        <div style={{ width: 168 }}>
          <ToggleButton />
        </div>
        <LogoImage className="logo" onClick={onClickLogo} />
        <div className="answer-button">
          <Button text="답변하러 가기" onClick={onClickButton} isValue={true} />
        </div>
      </HeaderTopContainer>

      <HeaderBottomContainer $theme={theme}>
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
  ${({ $theme }) =>
    $theme === 'light'
      ? ''
      : '#OPENMIND > path { fill: white; } #Group 10 > path { stroke: white; } #OPENMIND_2 > path { fill: white; }'}
`

const HeaderBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1.2rem;

  .answer-who {
    color: ${({ $theme }) =>
      $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'}
    font-size: 4rem;
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
