import styled from 'styled-components'

const BadgeStyledComponent = styled.div`
  border-radius: 8px;
  border: 1px solid var(--brown-40, #542f1a);
  background: var(--gray-10, #fff);
  width: 90px;
  height: 30px;
  padding: 4px 12px;
  text-align: center;
  color: var(--brown-40, #542f1a);
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
`

const BadgeNoAnswerStyledComponent = styled(BadgeStyledComponent)`
  border: 1px solid var(--grayscale-40, #818181);
  color: var(--grayscale-40, #818181);
  width: 70px;
`

function Badge({ isAnswered }) {
  return (
    <>
      {isAnswered ? (
        <BadgeStyledComponent>답변 완료</BadgeStyledComponent>
      ) : (
        <BadgeNoAnswerStyledComponent>미답변</BadgeNoAnswerStyledComponent>
      )}
    </>
  )
}

export default Badge
