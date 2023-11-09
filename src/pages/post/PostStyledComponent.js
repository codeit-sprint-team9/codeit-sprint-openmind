import styled from 'styled-components'
import { device } from '../../components/styles'

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button``
export const TopDiv = styled.div`
  width: 100%;
  background-color: var(--gray-10);
  position: relative;
  display: flex;
  justify-content: center;
  .nav-img {
    text-align: center;
    width: 120rem;
    height: 23.4rem;
  }
  .openMind-img {
    z-index: 1;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translate(-50%);
  }
  .cat-img {
    position: absolute;
    top: 12.9rem;
    left: 50%;
    transform: translate(-50%);
  }
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  color: var(--gray-60);
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4rem;
`
export const LinkDiv = styled.div`
  display: flex;
  padding-top: 1.2rem;

  justify-content: center;
  gap: 1.2rem;
`

export const ContentWrapper = styled.div`
  padding-top: ${({ $state }) => ($state === 'answer' ? '' : '5.4rem')};
  padding-bottom: 13.6rem;

  @media (${device.tablet}) {
    padding: ${({ $state }) => ($state === 'answer' ? '0rem' : '5.4rem')} 3.6rem
      13.6rem;
  }
  @media (${device.mobile}) {
    padding: ${({ $state }) => ($state === 'answer' ? '0rem' : '5.4rem')} 2.4rem
      13.6rem;
  }
`
export const Content = styled.div`
  padding: 1.6rem;
  width: 71.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  border-radius: 1.6rem;
  border: 0.1rem solid #c7bbb5;
  background-color: #f5f1ee;
  @media (${device.tablet}) {
    width: 70.4rem;
  }
  @media (${device.mobile}) {
    width: 32.7rem;
  }
`
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--brown-40);
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`
export const ContentDiv = styled.div`
  .infinite {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

export const DivButton = styled.div`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;
`
export const ContentNoQuestion = styled.div`
  padding: 7rem 0 4.9rem;
`

export const CardDiv = styled.div`
  font-size: 2rem;
  border: 0.1rem solid #fff;
  margin: 1.2rem;
`

export const P = styled.p`
  text-align: center;
  font-size: 2rem;
`
export const DeleteButton = styled.div`
  width: 716px;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0.9rem;
  @media (${device.mobile}) {
    width: 327px;
  }
`
