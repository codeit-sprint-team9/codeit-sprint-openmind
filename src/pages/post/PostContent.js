import MessageImg from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getAllReviews, getReviews } from './api'
import { useEffect, useState } from 'react'
import PostCard from '../../components/postCard/PostCard'
import FloatingButton from '../../components/common/FloatingButton'

const LIMIT = 5

export default function PostContent({ setIsOpened, state }) {
  const [cnt, setCnt] = useState(0)
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)
  const [hasNext, setHasNext] = useState(false)

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

  useEffect(() => {
    handleLoad({ offset: 0, limit: LIMIT })
    handleAllReviews()
  }, [])

  const loadMore = () => {
    //api 불러오는곳
    if (hasNext !== false) {
      handleLoadMore()
    } else {
      setHasNext(false)
    }
  }

  const handleModal = () => {
    setIsOpened(true)
  }

  return (
    <>
      <S.ContentWrapper className="wrapper" $state={state}>
        <S.Content className="content">
          <S.ContentHeader>
            <img src={MessageImg} alt="메세지 이미지" />
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
        <S.DivButton>
          <FloatingButton onClick={handleModal} />
        </S.DivButton>
      </S.ContentWrapper>
    </>
  )
}
