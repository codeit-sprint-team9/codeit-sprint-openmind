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
  // color: ${(
    { $count } // dark
  ) => ($count === '0' ? 'var(--gray-40, #818181);' : 'var(--blue, #1877F2);')};
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-10);' : 'var(--sky-blue);'};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  svg > g > path {
    // fill: ${({ $count }) =>
      $count === '0' ? '' : 'var(--blue, #1877F2);'}; // dark
    fill: ${({ $count }) =>
      $count === '0' ? 'var(--gray-10)' : 'var(--sky-blue);'};
  }
`

const DisLikeStyledComponent = styled(LikeStyledComponent)`
  // color: ${(
    { $count } // dark
  ) => ($count === '0' ? 'var(--gray-40, #818181);' : 'var(--gray-60, #000);')};
  color: ${({ $count }) =>
    $count === '0' ? 'var(--gray-10);' : 'var(--orange);'};

  svg > g > path {
    // fill: ${({ $count }) =>
      $count === '0' ? '' : 'var(--gray-60, #000);'}; // dark
    fill: ${({ $count }) =>
      $count === '0' ? 'var(--gray-10);' : 'var(--orange);'};
  }
`

function Reaction({ like = '0', disLike = '0' }) {
  // like 있으면 파란색 disLike 있으면 검은색
  return (
    <ReactionStyledComponent>
      <LikeStyledComponent $count={like}>
        <LikeIcon />
        좋아요 {like !== '0' ? like : ''}
      </LikeStyledComponent>
      <DisLikeStyledComponent $count={disLike}>
        <DisLikeIcon />
        싫어요
      </DisLikeStyledComponent>
    </ReactionStyledComponent>
  )
}

export default Reaction
