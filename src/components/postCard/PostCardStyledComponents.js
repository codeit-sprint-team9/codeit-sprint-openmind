import styled from 'styled-components'
import { device } from '../styles'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--gray-10);
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(140, 140, 140, 0.25);
  padding: 3.2rem;
  box-sizing: border-box;
  max-width: 68.4rem;
  gap: 3.2rem;
  @media all and ${device.mobile} {
    padding: 2.4rem;
    gap: 2.4rem;
  }

  .divider {
    background: var(--gray-30);
    width: 100%;
    height: 0.1rem;
    margin-bottom: -0.8rem;
    @media all and ${device.mobile} {
      margin-bottom: 0;
    }
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;

  .question-ago {
    color: var(--gray-40);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
  }

  .title {
    color: var(--gray-60);
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.4rem;
    @media all and ${device.mobile} {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;

  .userIcon {
    width: 4.8rem;
    height: 4.8rem;
    @media all and ${device.mobile} {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  .main-content-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .content-user-info-container {
      display: flex;
      gap: 0.8rem;
      align-items: center;

      .user-name {
        color: var(--gray60);
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.4rem;
        @media all and ${device.mobile} {
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
      }

      .content-ago {
        color: var(--gray-40);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.8rem;
      }
    }

    .main-content {
      color: var(--gray-60);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.2rem;
    }
  }
`
