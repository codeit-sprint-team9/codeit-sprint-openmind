import styled from 'styled-components'
import { ReactComponent as LikeIcon } from '../../asset/Reaction/icon-thumbs-up.svg'
import { ReactComponent as DisLikeIcon } from '../../asset/Reaction/icon-thumbs-down.svg'

const ReactionStyledComponent = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`

const LikeStyledComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-40, #818181);' : 'var(--blue, #1877F2);'};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  svg > g > path {
    fill: ${({ $count }) => ($count === '0' ? '' : 'var(--blue, #1877F2);')};
  }
`

const DisLikeStyledComponent = styled(LikeStyledComponent)`
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-40, #818181);' : 'var(--gray-60, #000);'};
  svg > g > path {
    fill: ${({ $count }) => ($count === '0' ? '' : 'var(--gray-60, #000);')};
  }
`

function Reaction({ like = '0', disLike = '0', onClick }) {
  // like 있으면 파란색 disLike 있으면 검은색
  return (
    <ReactionStyledComponent>
      <LikeStyledComponent $count={like} onClick={() => onClick('like')}>
        <LikeIcon />
        좋아요 {like !== '0' ? like : ''}
      </LikeStyledComponent>
      <DisLikeStyledComponent
        $count={disLike}
        onClick={() => onClick('dislike')}
      >
        <DisLikeIcon />
        싫어요
      </DisLikeStyledComponent>
    </ReactionStyledComponent>
  )
}

export default Reaction
