import styled from 'styled-components'
import { device } from '../styles'
import { InputTextAreaStyledComponent } from '../common/InputTextArea'

export const PostCardWrapper = styled.div`
  position: relative;
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  background: var(--gray-10);
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(140, 140, 140, 0.25);
  padding: 3.2rem;
  box-sizing: border-box;
  width: 68.4rem;
  gap: 3.2rem;
  @media all and ${device.tablet} {
    width: 67.2rem;
  }
  @media all and ${device.mobile} {
    padding: 2.4rem;
    gap: 2.4rem;
    width: 29.5rem;
  }

  .header-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .option-btn {
      cursor: pointer;
    }
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

  .user-icon {
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
    width: 100%;

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

  .textarea-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    ${InputTextAreaStyledComponent} {
      height: 18.6rem;
    }
  }
`
export const OptionMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  width: 10rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5rem;
  right: -4.5rem;
  z-index: 10;

  .optionMenuItem {
    color: #333236;
    font-size: 1.4rem;
    font-weight: 400;
    background: #fff;
    box-sizing: border-box;
    width: 100%;
    padding: 0.7rem 1.2rem;
    text-align: center;
    &:hover {
      color: #6d6afe;
      background: #e7effb;
    }
  }
`
