import styled from 'styled-components'
import LikeIcon from '../../asset/Reaction/icon-thumbs-up.svg'
import DisLikeIcon from '../../asset/Reaction/icon-thumbs-down.svg'
// import { useState } from 'react'

const ReactionStyledComponent = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`

const LikeStyledComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--gray-40, #818181);
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  img {
    filter: invert(33%) sepia(86%) saturate(2137%) hue-rotate(202deg)
      brightness(97%) contrast(96%);
  }
  &:hover {
    color: var(--gray-60, #000);
    img {
      filter: invert(0%) sepia(100%) saturate(100%) hue-rotate(100deg)
        brightness(0%) contrast(100%);
    }
  }
  cursor: pointer;
`

function Reaction({ like = false, disLike = false }) {
  // const [isCliked, setIsCliked] = useState(false)
  return (
    <ReactionStyledComponent>
      <LikeStyledComponent>
        <img src={LikeIcon} alt="LikeIcon" />
        좋아요 {like}
      </LikeStyledComponent>
      <LikeStyledComponent>
        <img src={DisLikeIcon} alt="LikeIcon" />
        싫어요 {disLike}
      </LikeStyledComponent>
    </ReactionStyledComponent>
  )
}

export default Reaction
