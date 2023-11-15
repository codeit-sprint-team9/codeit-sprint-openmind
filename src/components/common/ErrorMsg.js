import styled from 'styled-components'
import errorIcon from '../../asset/Error/error-icon.svg'

export default function ErrorMsg() {
  return (
    <>
      <Div>
        <img src={errorIcon} alt="에러 아이콘" />
        <div>알 수 없는 오류가 발생했습니다. 다시 시도해주세요</div>
      </Div>
    </>
  )
}

const Div = styled.div`
  width: 38rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  gap: 0.6rem;
  padding: 1rem 1.8rem;
  background: var(--red, #b93333);
  color: var(--gray-10, #ffffff);
  border-radius: 0.8rem;
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
`