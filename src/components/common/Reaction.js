import styled from 'styled-components'
import LikeIcon from '../../asset/Reaction/icon-thumbs-up.svg'
import DisLikeIcon from '../../asset/Reaction/icon-thumbs-down.svg'

const ReactionStyledComponent = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`

const LikeStyledComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-40, #818181);' : 'var(--blue-50, #1877F2);'};
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  img {
    filter: ${({ $count }) =>
      $count === '0'
        ? ''
        : 'invert(33%) sepia(86%) saturate(2137%) hue-rotate(202deg)brightness(97%) contrast(96%);'};
  }
  cursor: pointer;
`

const DisLikeStyledComponent = styled(LikeStyledComponent)`
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-40, #818181);' : 'var(--gray-60, #000);'};
  img {
    filter: ${({ $count }) =>
      $count === '0'
        ? ''
        : 'invert(0%) sepia(100%) saturate(100%) hue-rotate(100deg) brightness(0%) contrast(100%);'};
  }
`

function Reaction({ like = '0', disLike = '0' }) {
  // like 있으면 파란색 disLike 있으면 검은색
  return (
    <ReactionStyledComponent>
      <LikeStyledComponent $count={like}>
        <img src={LikeIcon} alt="LikeIcon" />
        좋아요 {like !== '0' ? like : ''}
      </LikeStyledComponent>
      <DisLikeStyledComponent $count={disLike}>
        <img src={DisLikeIcon} alt="LikeIcon" />
        싫어요
      </DisLikeStyledComponent>
    </ReactionStyledComponent>
  )
}

export default Reaction
