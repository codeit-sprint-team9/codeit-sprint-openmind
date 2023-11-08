import MessageImg from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import { getAllReviews, getReviews } from './api'
import { useEffect, useState } from 'react'

const LIMIT = 5

const Div = styled.div`
  padding: 50px;
  font-size: 20px;
  border: 1px solid #000;
  margin: 12px;
`
const P = styled.p`
  text-align: center;
  font-size: 20px;
`
export default function PostContent() {
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
      setTimeout(() => {
        handleLoadMore()
      }, 500)
    } else {
      setHasNext(false)
    }
  }
  return (
    <S.ContentWrapper>
      <S.Content>
        <S.ContentHeader>
          <img src={MessageImg} alt="메세지 이미지" />
          <div>{cnt.length}개의 질문이 있습니다</div>
        </S.ContentHeader>
        <S.ContentDiv>
          {/* <Cards items={items} /> */}
          <InfiniteScroll
            dataLength={items.length}
            next={loadMore}
            hasMore={hasNext}
            loader={<P>로딩중...</P>}
            endMessage={<P>끝!</P>}
          >
            {items.map((item, index) => {
              return (
                <Div key={index}>
                  {item.title}
                  {item.title}
                  {item.title}
                </Div>
              )
            })}
          </InfiniteScroll>
        </S.ContentDiv>
      </S.Content>
      <S.DivButton>질문 작성하기</S.DivButton>
    </S.ContentWrapper>
  )
}
