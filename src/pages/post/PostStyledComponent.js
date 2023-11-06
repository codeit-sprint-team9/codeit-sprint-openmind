import styled from 'styled-components'

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  * {
    box-sizing: content-box;
  }
`
export const Button = styled.button``
export const TopDiv = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  .nav-img {
    text-align: center;
    width: 1200px;
    height: 234px;
  }
  .openMind-img {
    z-index: 1;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .cat-img {
    position: absolute;
    top: 129px;
    left: 50%;
    transform: translate(-50%);
  }
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  color: #000;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`
export const LinkDiv = styled.div`
  display: flex;
  padding-top: 12px;

  justify-content: center;
  gap: 12px;
`

export const ContentWrapper = styled.div`
  padding-top: 54px;
  padding-bottom: 136px;
`
export const Content = styled.div`
  width: 684px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid #c7bbb5;
  background-color: #f5f1ee;
`
export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #542f1a;
  font-family: Actor;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
`
export const ContentDiv = styled.div`
    width:100%
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  `

export const DivButton = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
`
export const ContentNoQuestion = styled.div`
  padding: 70px 0 49px;
`
