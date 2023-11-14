import {
  BottomContainer,
  MainContainer,
  OptionMenuContainer,
  OptionMenuItem,
  PostCardContainer,
  PostCardWrapper,
  TitleContainer,
} from './PostCardStyledComponents'
import OptionIcon from '../../asset/postCard/img_option.svg'
import { useState } from 'react'
import Badge from '../common/Badge'
import InputTextArea from '../common/InputTextArea'
import Button from '../common/Button'
import Reaction from '../common/Reaction'
import Edit from '../common/Edit'
import useAsync from '../../hooks/useAsync'
import {
  deleteAnswers,
  getQuestions,
  postAnswers,
  postReactions,
  putAnswers,
} from '../../api/postCard'
import moment from 'moment'

const calculateTimeAgo = (createdAt) => {
  const createdDate = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss[Z]')
  const currentDate = moment()
  const diff = currentDate.diff(createdDate, 'seconds')

  console.log(createdAt)

  if (diff < 120) {
    return '1 minute ago'
  } else if (diff <= 3540) {
    return `${Math.floor(diff / 60)} 분 전`
  } else if (diff < 3600) {
    return '1 hour ago'
  } else if (diff <= 82800) {
    return `${Math.floor(diff / 3600)} 시간 전`
  } else if (diff < 86400) {
    return '1 day ago'
  } else if (diff <= 2592000) {
    return `${Math.floor(diff / 86400)} 일 전`
  } else if (diff <= 28512000) {
    return `${Math.floor(diff / 2592000)} 달 전`
  } else if (diff <= 31536000) {
    return '1 year ago'
  } else {
    return `${Math.floor(diff / 31536000)} 년 전`
  }
}

const PostCard = ({ state, data, handleDeleteQuestion }) => {
  const [cardData, setCardData] = useState(data)
  const [isOpenOption, setIsOpenOption] = useState(false)
  const [answer, setAnswer] = useState(
    cardData.answer
      ? cardData.answer.isRejected
        ? ''
        : cardData.answer.content
      : ''
  )
  const isAnswered = cardData.answer ? true : false
  const [isEdit, setIsEdit] = useState(false)

  const userInfo = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : 0

  const [isLoadingReactions, errorReactions, postReactionsAsync] =
    useAsync(postReactions)
  const [isLoadingAnswers, errorAnswers, postAnswersAsync] =
    useAsync(postAnswers)
  const [isLoadingPutAnswers, errorPutAnswers, putAnswersAsync] =
    useAsync(putAnswers)
  const [isLoadingDeleteAnswers, errorDeleteAnswers, deleteAnswersAsync] =
    useAsync(deleteAnswers)
  const [, , getQuestionsAsync] = useAsync(getQuestions)

  const handleGetQuestion = async () => {
    const response = await getQuestionsAsync(data.id)
    if (!response) return
    setCardData(response)
    setAnswer(
      response.answer
        ? response.answer.isRejected
          ? ''
          : response.answer.content
        : ''
    )
  }

  // 답변 등록, 답변 수정
  const handlePostAnswer = async (isRejected = false) => {
    // 답변 수정

    if (isAnswered) {
      const result = await putAnswersAsync(
        cardData.answer.id,
        answer,
        isRejected
      )

      if (!result) return

      handleGetQuestion()
      setIsEdit(false)
      return
    }
    const result = await postAnswersAsync(
      cardData.id,
      isRejected ? 'rejected' : answer,
      isRejected
    )

    if (!result) return
    handleGetQuestion()
    return
  }

  // 리액션
  const handleReactions = async (type) => {
    const result = await postReactionsAsync(type, cardData.id)

    if (!result) return
    handleGetQuestion()
  }

  // option 버튼 - 답변 삭제, 답변 수정, 질문 삭제
  const handleOptions = async (menu) => {
    setIsOpenOption(false)
    if (menu === '답변 거절') {
      handlePostAnswer(true)
      return
    }
    if (menu === '답변 삭제') {
      await deleteAnswersAsync(cardData.answer.id)

      handleGetQuestion()
      return
    }
    if (menu === '질문 삭제') {
      handleDeleteQuestion(cardData.id)
      return
    }
    if (menu === '수정하기') {
      setIsEdit(true)
      return
    }
  }

  if (errorPutAnswers || errorDeleteAnswers) {
    return (
      <PostCardWrapper>
        <PostCardContainer>
          <ErrorContainer />
        </PostCardContainer>
      </PostCardWrapper>
    )
  }

  if (isLoadingPutAnswers || isLoadingDeleteAnswers) {
    return (
      <PostCardWrapper>
        <PostCardContainer>
          <LoadingContainer />
        </PostCardContainer>
      </PostCardWrapper>
    )
  }

  return (
    <PostCardWrapper>
      <PostCardContainer>
        <div className="header-container">
          <Badge isAnswered={isAnswered} />
          {state === 'answer' && (
            <img
              className="option-btn"
              src={OptionIcon}
              alt="optionIcon"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpenOption(!isOpenOption)
              }}
            />
          )}
        </div>

        <TitleContainer>
          <div className="question-ago">
            질문 · {calculateTimeAgo(cardData.createdAt)}
          </div>

          <div className="title">{cardData.content}</div>
        </TitleContainer>

        {!(state === 'default' && !isAnswered) && (
          <MainContainer $isAnswered={isAnswered}>
            <img
              src={userInfo.imageSource}
              className="user-icon"
              alt="userIcon"
            />
            <div className="main-content-container">
              <div className="content-user-info-container">
                <div className="user-name">{userInfo.name}</div>
                <div className="content-ago">
                  {calculateTimeAgo(cardData.answer?.createdAt)}
                </div>
              </div>

              {isAnswered && !isEdit ? (
                <>
                  {cardData.answer.isRejected ? (
                    <div className="answerRejected">답변 거절</div>
                  ) : (
                    <div className="main-content">
                      {cardData.answer.content}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {isLoadingAnswers ? (
                    <LoadingContainer />
                  ) : (
                    <>
                      {errorAnswers ? (
                        <ErrorContainer />
                      ) : (
                        <div className="textarea-container">
                          <InputTextArea
                            placeholder="답변을 입력해주세요"
                            setAnswer={setAnswer}
                            answer={answer}
                          />
                          <Button
                            onClick={() => handlePostAnswer()}
                            isValue={answer !== ''}
                            brown={true}
                            text="답변 완료"
                          />
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </MainContainer>
        )}

        <div className="divider" />

        <BottomContainer>
          {!isLoadingReactions ? (
            <>
              {errorReactions ? (
                <ErrorContainer />
              ) : (
                <Reaction
                  like={cardData.like}
                  disLike={cardData.dislike}
                  onClick={handleReactions}
                />
              )}
            </>
          ) : (
            <LoadingContainer />
          )}

          {isAnswered && <Edit onClick={handleOptions} />}
        </BottomContainer>
      </PostCardContainer>

      {isOpenOption && (
        <OptionMenu onClick={handleOptions} isAnswered={isAnswered} />
      )}
    </PostCardWrapper>
  )
}
export default PostCard

const ErrorContainer = () => {
  return <div className="error">문제가 발생했습니다. 다시 시도해주세요.</div>
}

const LoadingContainer = () => {
  return <div className="loading">로딩중입니다. 잠시만 기다려주세요.</div>
}

const OptionMenuArr = ['답변 거절', '답변 삭제', '질문 삭제', '수정하기']

const OptionMenu = ({ onClick, isAnswered }) => {
  return (
    <OptionMenuContainer>
      {OptionMenuArr.map((e, index) => {
        return (
          <OptionMenuItem
            key={index}
            $display={
              !isAnswered
                ? e === '답변 삭제' || e === '수정하기'
                  ? false
                  : true
                : e === '수정하기'
                ? false
                : true
            }
            $isEdit={e === '수정하기'}
            className="optionMenuItem"
            onClick={() => onClick(e)}
          >
            {e}
          </OptionMenuItem>
        )
      })}
    </OptionMenuContainer>
  )
}
