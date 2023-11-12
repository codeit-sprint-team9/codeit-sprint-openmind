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
  deleteQuestions,
  postAnswers,
  postReactions,
  putAnswers,
} from '../../api/postCard'

const PostCard = ({ state, cardData }) => {
  const [isOpenOption, setIsOpenOption] = useState(false)
  const [answer, setAnswer] = useState(
    cardData.answer ? cardData.answer.content : ''
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
  const [isLoadingDeleteQuestions, errorDeleteQuestions, deleteQuestionsAsync] =
    useAsync(deleteQuestions)

  // 답변 등록, 답변 수정
  const handlePostAnswer = async (isRejected = false) => {
    // 답변 수정
    if (answer.length < 1) return
    if (isAnswered) {
      const result = await putAnswersAsync(
        cardData.answer.id,
        answer,
        isRejected
      )

      if (!result) return
      return
    }
    const result = await postAnswersAsync(
      cardData.id,
      isRejected ? 'rejected' : answer,
      isRejected
    )

    if (!result) return
  }

  // 리액션
  const handleReactions = async (type) => {
    const result = await postReactionsAsync(type, cardData.id)

    if (!result) return
  }

  // option 버튼 - 답변 삭제, 답변 수정, 질문 삭제
  const handleOptions = async (menu) => {
    setIsOpenOption(false)
    if (menu === '답변 거절') {
      handlePostAnswer(true)
      return
    }
    if (menu === '답변 삭제') {
      const result = await deleteAnswersAsync(cardData.answer)
      if (!result) return
      return
    }
    if (menu === '질문 삭제') {
      const result = await deleteQuestionsAsync(cardData.id)
      if (!result) return
      return
    }
    if (menu === '수정하기') {
      setIsEdit(true)
      return
    }
  }

  if (errorPutAnswers || errorDeleteAnswers || errorDeleteQuestions) {
    return (
      <PostCardWrapper>
        <PostCardContainer>
          <ErrorContainer />
        </PostCardContainer>
      </PostCardWrapper>
    )
  }

  if (
    isLoadingPutAnswers ||
    isLoadingDeleteAnswers ||
    isLoadingDeleteQuestions
  ) {
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
          <div className="question-ago">질문 · 2주전</div>

          <div className="title">{cardData.title}</div>
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
                <div className="content-ago">2주전</div>
              </div>

              {isAnswered && !isEdit ? (
                <>
                  {cardData.answer.isRejected ? (
                    <div>답변 거절</div>
                  ) : (
                    <div className="main-content">cardData.answer.content</div>
                  )}
                </>
              ) : (
                <>
                  {isLoadingAnswers ? (
                    <isLoadingAnswers />
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
                  disLike={cardData.disLike}
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
