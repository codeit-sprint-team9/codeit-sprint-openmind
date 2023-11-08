import styled, { css } from 'styled-components'

const BadgeStyledComponent = css`
  border-radius: 0.8rem;
  background: var(--gray-10, #fff);
  padding: 0.4rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
`

const BadgeAnswerStyledComponent = styled.div`
  ${BadgeStyledComponent}
  border: 0.1rem solid var(--brown-40, #542f1a);
  color: var(--brown-40, #542f1a);
  width: 7.8rem;
`

const BadgeNoAnswerStyledComponent = styled.div`
  ${BadgeStyledComponent}
  border: 0.1rem solid var(--grayscale-40, #818181);
  color: var(--grayscale-40, #818181);
  width: 6.3rem;
`

function Badge({ isAnswered }) {
  return (
    <>
      {isAnswered ? (
        <BadgeAnswerStyledComponent>답변 완료</BadgeAnswerStyledComponent>
      ) : (
        <BadgeNoAnswerStyledComponent>미답변</BadgeNoAnswerStyledComponent>
      )}
    </>
  )
}

export default Badge
