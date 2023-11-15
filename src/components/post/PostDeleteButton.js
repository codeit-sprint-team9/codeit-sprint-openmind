import styled from 'styled-components'
import { device } from '../styles'

const FloatingButtonStyledComponent = styled.div`
  padding: 1.2rem 2.4rem;
  border-radius: 20rem;
  // background: var(--brown-40, #542f1a); // dark
  background: var(--gray-50, #542f1a);
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: var(--gray-10, #fff);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  width: 10rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    padding: 0.5rem 1.3rem;
    width: 7rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`

function PostDeleteButton() {
  return <FloatingButtonStyledComponent>삭제하기</FloatingButtonStyledComponent>
}

export default PostDeleteButton
