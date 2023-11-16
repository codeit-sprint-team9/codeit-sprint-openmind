import styled from 'styled-components'
import { ReactComponent as LikeIcon } from '../../asset/Reaction/icon-thumbs-up.svg'
import { ReactComponent as DisLikeIcon } from '../../asset/Reaction/icon-thumbs-down.svg'
import { darkMode } from '../../atom/atom'
import { useRecoilValue } from 'recoil'

const ReactionStyledComponent = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`

const LikeStyledComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  ${({ $theme, $count }) =>
    $theme === 'light'
      ? $count === '0'
        ? 'color: var(--gray-40);'
        : 'svg > g > path {fill: var(--blue);} color: var(--blue);'
      : $count === '0'
      ? 'svg > g > path {fill: var(--gray-10);} color: var(--gray-10);'
      : 'svg > g > path {fill: var(--sky-blue);} color: var(--sky-blue);'}
`

const DisLikeStyledComponent = styled(LikeStyledComponent)`
  ${({ $theme, $count }) =>
    $theme === 'light'
      ? $count === '0'
        ? 'color: var(--gray-40);'
        : 'svg > g > path {fill: var(--gray-60);} color: var(--gray-60);'
      : $count === '0'
      ? 'svg > g > path {fill: var(--gray-10);} color: var(--gray-10);'
      : 'svg > g > path {fill: var(--orange);} color: var(--orange);'}
`

function Reaction({ like = '0', disLike = '0', onClick }) {
  const theme = useRecoilValue(darkMode)
  return (
    <ReactionStyledComponent>
      <LikeStyledComponent
        $count={like}
        $theme={theme}
        onClick={() => onClick('like')}
      >
        <LikeIcon />
        좋아요 {like !== 0 ? like : ''}
      </LikeStyledComponent>
      <DisLikeStyledComponent
        $count={disLike}
        $theme={theme}
        onClick={() => onClick('dislike')}
      >
        <DisLikeIcon />
        싫어요
      </DisLikeStyledComponent>
    </ReactionStyledComponent>
  )
}

export default Reaction
