import MessageImg from '../../asset/post/message.svg'
import * as S from '../../pages/post/PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import PostCard from '../postCard/PostCard'
import FloatingButton from '../common/FloatingButton'
import { device } from '../styles'
import { modalState } from '../../recoil/modal'
import { useRecoilState } from 'recoil'

export default function PostContent({ state, items, handleLoadMore, cnt }) {
  const [modalOpened, setModalOpened] = useRecoilState(modalState)

  const [text, setText] = useState(window.innerWidth < 767 ? true : false)
  const [hasNext, setHasNext] = useState(true)
  const screenChange = (event) => {
    const matches = event.matches
    setText(matches)
  }

  useEffect(() => {
    let myMedia = window.matchMedia(device.mobile)
    myMedia.addEventListener('change', screenChange)
    return () => myMedia.removeEventListener('change', screenChange)
  }, [])

  const loadMore = () => {
    if (items.length !== cnt) {
      handleLoadMore()
    } else {
      setHasNext(false)
    }
  }

  const handleModal = () => {
    setModalOpened((prev) => ({
      ...prev,
      postModal: {
        display: true,
      },
    }))
  }

  useEffect(() => {
    setHasNext(true)
  }, [items])

  return (
    <>
      <S.ContentWrapper $state={state}>
        <S.Content>
          <S.ContentHeader>
            <img
              src={MessageImg}
              alt="메세지 이미지"
              className="content-header-img"
            />
            <div>{cnt}개의 질문이 있습니다</div>
          </S.ContentHeader>
          <S.ContentDiv>
            <InfiniteScroll
              dataLength={items.length}
              next={loadMore}
              hasMore={hasNext}
              loader={<p>로딩중입니다.</p>}
              className="infinite"
              style={{
                overflow: 'visible',
              }}
            >
              {items.map((item, index) => {
                return <PostCard key={index} item={item} state={state} />
              })}
            </InfiniteScroll>
          </S.ContentDiv>
        </S.Content>
      </S.ContentWrapper>
      <S.DivButton $isOpened={modalOpened.postModal.display}>
        {state === 'default' && (
          <FloatingButton
            text={text ? '질문 작성' : '질문 작성하기'}
            onClick={handleModal}
          />
        )}
      </S.DivButton>
    </>
  )
}
