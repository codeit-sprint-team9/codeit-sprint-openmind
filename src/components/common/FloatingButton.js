import styled from 'styled-components'

const FloatingButtonStyledComponent = styled.div`
  padding: 1.2rem 2.4rem;
  border-radius: 20rem;
  background: var(--brown-40, #542f1a);
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: var(--gray-10, #fff);
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  width: 20.8rem;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

function FloatingButton() {
  return (
    <FloatingButtonStyledComponent>질문 작성하기</FloatingButtonStyledComponent>
  )
}

export default FloatingButton
