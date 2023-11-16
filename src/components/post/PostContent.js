import { ReactComponent as MessageImg } from '../../asset/post/message.svg'
import * as S from '../../pages/post/PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import PostCard from '../postCard/PostCard'
import FloatingButton from '../common/FloatingButton'
import { device } from '../styles'
import { modalState } from '../../recoil/modal'
import { useRecoilState } from 'recoil'
import Loading from '../common/Loading'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'

export default function PostContent({
  state,
  items,
  handleLoadMore,
  handleDeleteQuestion,
  cnt,
}) {
  const [modalOpened, setModalOpened] = useRecoilState(modalState)

  const [text, setText] = useState(window.innerWidth < 767 ? true : false)
  const [hasNext, setHasNext] = useState(true)
  const screenChange = (event) => {
    const matches = event.matches
    setText(matches)
  }
  const theme = useRecoilValue(darkMode)

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

  const handleModal = (e) => {
    e.stopPropagation()
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
        <S.Content $theme={theme}>
          {cnt ? (
            <>
              {' '}
              <S.ContentHeader $theme={theme}>
                <MessageImg className="content-header-img" />
                <div>{cnt}개의 질문이 있습니다</div>
              </S.ContentHeader>
              <S.ContentDiv>
                <InfiniteScroll
                  dataLength={items.length}
                  next={loadMore}
                  hasMore={hasNext}
                  loader={
                    <S.Spinner>
                      <Loading />
                    </S.Spinner>
                  }
                  className="infinite"
                  style={{
                    overflow: 'visible',
                  }}
                >
                  {items.map((item) => {
                    return (
                      <PostCard
                        key={item.id}
                        data={item}
                        state={state}
                        handleDeleteQuestion={handleDeleteQuestion}
                      />
                    )
                  })}
                </InfiniteScroll>
              </S.ContentDiv>
            </>
          ) : (
            <Loading />
          )}
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
