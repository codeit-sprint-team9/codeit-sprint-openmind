import Button from '../../components/common/Button'
import logoImage from '../../asset/logo.svg'
import { device } from '../../components/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 13rem;
  align-items: center;

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
`

const HeaderBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1.2rem;
  .answer-who {
    color: var(--gray-60, #000);
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
function Header() {
  return (
    <>
      <HeaderTopContainer>
        <Link to="/">
          <img src={logoImage}></img>
        </Link>
        <div className="answer-button">
          <Button text="답변하러 가기" isValue={true} />
        </div>
      </HeaderTopContainer>

      <HeaderBottomContainer>
        <div className="answer-who">누구에게 질문할까요?</div>
      </HeaderBottomContainer>
    </>
  )
}

export default Header
