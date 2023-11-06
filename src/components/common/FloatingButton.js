import styled from 'styled-components'

const FloatingButtonStyledComponent = styled.div`
  padding: 12px 24px;
  border-radius: 200px;
  background: var(--brown-40, #542f1a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--grayscale-10, #fff);
  font-family: Actor;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  font-family: Pretendard;
`

function FloatingButton() {
  return (
    <FloatingButtonStyledComponent>질문 작성하기</FloatingButtonStyledComponent>
  )
}

export default FloatingButton
