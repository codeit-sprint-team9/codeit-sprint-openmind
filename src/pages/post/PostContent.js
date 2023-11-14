import { ReactComponent as MessageImg } from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getAllReviews, getReviews } from './api'
import { useEffect, useState } from 'react'
import PostCard from '../../components/postCard/PostCard'
import FloatingButton from '../../components/common/FloatingButton'
import { device } from '../../components/styles'

const LIMIT = 5

export default function PostContent({ setIsOpened, state, isOpened }) {
  const [cnt, setCnt] = useState(0)
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)
  const [hasNext, setHasNext] = useState(false)

  const [text, setText] = useState(window.innerWidth < 767 ? true : false)

  const screenChange = (event) => {
    const matches = event.matches
    setText(matches)
  }

  useEffect(() => {
    let myMedia = window.matchMedia(device.mobile)
    myMedia.addEventListener('change', screenChange)
    return () => myMedia.removeEventListener('change', screenChange)
  }, [])

  const handleAllReviews = async () => {
    const result = await getAllReviews()
    const { reviews } = result
    setCnt(reviews)
  }

  const handleLoad = async (options) => {
    const result = await getReviews(options)
    if (!result) return
    const { reviews, paging } = result
    if (options.offset === 0) {
      setItems(reviews)
    } else {
      setItems((prevItems) => [...prevItems, ...reviews])
    }
    setOffset(options.offset + options.limit)
    setHasNext(paging.hasNext)
  }

  const handleLoadMore = () => {
    handleLoad({ offset, limit: LIMIT })
  }

  const loadMore = () => {
    if (hasNext !== false) {
      handleLoadMore()
    } else {
      setHasNext(false)
    }
  }

  const handleModal = () => {
    setIsOpened(true)
  }

  useEffect(() => {
    handleLoad({ offset: 0, limit: LIMIT })
    handleAllReviews()
  }, [])

  return (
    <>
      <S.ContentWrapper className="wrapper" $state={state}>
        <S.Content className="content">
          <S.ContentHeader>
            <MessageImg className="content-header-img" />
            <div>{cnt.length}개의 질문이 있습니다</div>
          </S.ContentHeader>
          <S.ContentDiv>
            <InfiniteScroll
              dataLength={items.length}
              next={loadMore}
              hasMore={hasNext}
              className="infinite"
            >
              {items.map((item, index) => {
                return <PostCard key={index} title={item.title} state={state} />
              })}
            </InfiniteScroll>
          </S.ContentDiv>
        </S.Content>
      </S.ContentWrapper>
      <S.DivButton $isOpened={isOpened}>
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
