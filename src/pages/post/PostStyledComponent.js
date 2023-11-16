import styled from 'styled-components'
import { device } from '../../components/styles'

export const Div = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-20);' : 'var(--gray-55);'};
`
export const Button = styled.button`
  cursor: pointer;
`
export const TopDiv = styled.div`
  width: 100vw;
  background-color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-10);' : 'var(--gray-60);'}
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .nav-img {
    width: 120rem;
    height: 23.4rem;
    @media (${device.mobile}) {
      width: 90.6rem;
      height: 17.7rem;
    }
  }
  .openMind-img {
    z-index: 1;
    position: absolute;
    top: 5rem;
    left: 50%;
    width: 17rem;
    height: 6.7rem;
    transform: translate(-50%);
    @media (${device.mobile}) {
      width: 12.4rem;
      height: 4.9rem;
      top: 4rem;
    }
  }
`

export const CatDiv = styled.div`
  position: absolute;
  top: 12.9rem;
  left: 50%;
  transform: translate(-50%);
  @media (${device.mobile}) {
    top: 10.1rem;
  }
  .profile-img {
    width: 13.6rem;
    border-radius: 70%;
    @media (${device.mobile}) {
      width: 10.4rem;
    }
  }
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4.3rem;
  color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'}
  font-size: 3.2rem;
  line-height: 4rem;
  @media (${device.mobile}) {
    padding-top: 4rem;
    font-size: 2.4rem;
  }
`
export const LinkDiv = styled.div`
  display: flex;
  padding-top: 1.2rem;

  justify-content: center;
  gap: 1.2rem;
  ${({ $theme }) =>
    $theme === 'light' ? '' : 'svg > rect {fill: var(--gray-50);}'}
`

export const ContentWrapper = styled.div`
  padding-top: ${({ $state }) => ($state === 'answer' ? '' : '5.4rem')};
  padding-bottom: 3.4rem;

  @media (${device.tablet}) {
    padding: ${({ $state }) => ($state === 'answer' ? '0rem' : '5.4rem')} 3.6rem
      3.4rem;
  }
  @media (${device.mobile}) {
    padding: ${({ $state }) => ($state === 'answer' ? '0rem' : '5.4rem')} 2.4rem
      3.4rem;
  }
`
export const Content = styled.div`
  padding: 1.6rem;
  background: ${({ $theme }) =>
    $theme === 'light' ? 'var(--brown-10);' : 'var(--gray-50);'}
  width: 71.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--brown-30, #c7bbb5);
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
  gap: 0.8rem;
  color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--brown-40);' : 'var(--gray-10);'}
  font-size: 2rem;
  line-height: 2.5rem;
  @media (${device.mobile}) {
    font-size: 1.8rem;
  }
  .content-header-img {
    width: 2.4rem;
    @media (${device.mobile}) {
      width: 2.2rem;
    }
  }
  ${({ $theme }) => ($theme === 'light' ? '' : 'svg > path {fill: white;}')}
`

export const ContentDiv = styled.div`
  .infinite {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (${device.mobile}) {
      gap: 1.6rem;
    }
  }
`

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivButton = styled.div`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;
`

export const ContentNoQuestion = styled.div`
  padding: 5.4rem 0 4.9rem;
  @media (${device.mobile}) {
    padding: 5rem 0 9rem;
  }
  ${({ $theme }) => ($theme === 'light' ? '' : 'svg > path {stroke: white;}')}
`

export const CardDiv = styled.div`
  font-size: 2rem;
  border: 0.1rem solid var(--gray-10, #fff);
  margin: 1.2rem;
`

export const P = styled.p`
  text-align: center;
  font-size: 2rem;
`
export const DeleteButton = styled.div`
  width: 71.6rem;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0.9rem;
  @media (${device.tablet}) {
    width: 70.4rem;
  }
  @media (${device.mobile}) {
    width: 32.7rem;
  }
`
export const ToastDiv = styled.div`
  z-index: 10;
  position: fixed;
  width: 16.7rem;
  height: 4.2rem;
  bottom: 6rem;
  left: 50.5%;
  transform: translate(-50%);
  animation: fadein 5.1s;
  @media (${device.mobile}) {
    bottom: 10rem;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
export const LogoDiv = styled.div`
  cursor: pointer;
  ${({ $theme }) =>
    $theme === 'light'
      ? ''
      : '#OPENMIND > path {fill: white;} #Group 10 > path {stroke: white;} #OPENMIND_2 > path {fill: white;}'}
`
