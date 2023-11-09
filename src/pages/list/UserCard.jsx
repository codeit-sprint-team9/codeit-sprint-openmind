import styled from 'styled-components'
import messageIcon from '../../asset/list/Messages.svg'
import profileImage from '../../asset/list/profileImg.svg'
import { device } from '../../components/styles'

function CardList() {
  return (
    <CardListContainer>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </CardListContainer>
  )
}
function UserCard() {
  return (
    <CardContainer>
      <CardProfile>
        <img src={profileImage} />
        <div>아초는 고양이</div>
      </CardProfile>

      <CardContent>
        <div>
          <img src={messageIcon} />
          <span>받은 질문</span>
        </div>
        <div>9개</div>
      </CardContent>
    </CardContainer>
  )
}

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22rem);
  grid-gap: 2rem;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    width: calc(100% - 6.4rem);
    max-width: 94rem;
    @media (max-width: 918px) {
      max-width: 70rem;
    }
    grid-template-columns: repeat(auto-fit, minmax(18.6rem, 1fr));
  }

  @media ${device.mobile} {
    width: calc(100% - 4.8rem);
    grid-template-columns: repeat(2, 15.5rem);
  }
`

const CardContainer = styled.div`
  display: flex;
  height: 18.6rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--gray-40);

  @media ${device.mobile} {
    padding: 1.6rem;
    width: 15.5rem;
  }
`

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-self: stretch;

  img {
    width: 6rem;
    height: 6rem;
  }

  div {
    color: var(--gray-60);
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.2rem;
  }

  @media ${device.mobile} {
    img {
      width: 4.8rem;
      height: 4.8rem;
    }

    div {
      font-size: 1.8rem;
    }
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--gray-40);
  font-size: 1.6rem;

  line-height: 2.2rem;
  img {
    margin-right: 0.25rem;
  }
  div {
    text-align: center;
    display: flex;
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`

export default CardList
