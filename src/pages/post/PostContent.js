import MessageImg from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import PostCard from '../../components/postCard/PostCard'
import FloatingButton from '../../components/common/FloatingButton'
import { device } from '../../components/styles'

export default function PostContent({ setIsOpened, state, isOpened, items }) {
  const [text, setText] = useState(window.innerWidth < 767 ? true : false)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(true)
  const result = []
  const cnt = state === 'answer' ? 2 : 4
  for (let i = 0; i < items.length; i += cnt) {
    let tempArray
    tempArray = items.slice(i, i + cnt)
    result.push(tempArray)
  }
  const [data, setData] = useState(result[0])

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
    if (page <= result.length - 1) {
      setData([...data, ...result[page]])
      setPage((prevPage) => prevPage + 1)
    } else {
      setHasNext(false)
    }
  }
  const handleModal = () => {
    setIsOpened(true)
  }

  useEffect(() => {
    setData(result[0])
  }, [items])
  return (
    <>
      <S.ContentWrapper className="wrapper" $state={state}>
        <S.Content className="content">
          <S.ContentHeader>
            <img
              src={MessageImg}
              alt="메세지 이미지"
              className="content-header-img"
            />
            <div>{items.length}개의 질문이 있습니다</div>
          </S.ContentHeader>
          <S.ContentDiv>
            <InfiniteScroll
              dataLength={data.length}
              next={loadMore}
              hasMore={hasNext}
              className="infinite"
              style={{
                overflow: 'visible',
              }}
            >
              {data.map((item, index) => {
                return <PostCard key={index} item={item} state={state} />
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
