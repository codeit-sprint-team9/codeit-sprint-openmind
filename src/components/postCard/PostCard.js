import {
  MainContainer,
  OptionMenuContainer,
  PostCardContainer,
  PostCardWrapper,
  TitleContainer,
} from './PostCardStyledComponents'
import UserImg from '../../asset/postCard/img_postCardUser.png'
import OptionIcon from '../../asset/postCard/img_option.svg'
import { useState } from 'react'
import Badge from '../common/Badge'
import InputTextArea from '../common/InputTextArea'
import Button from '../common/Button'
import Reaction from '../common/Reaction'

const PostCard = ({ state = 'answer' }) => {
  const [isOpenOption, setIsOpenOption] = useState(false)
  const [, setSelectedOption] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <PostCardWrapper>
      <PostCardContainer>
        <div className="header-container">
          <Badge isAnswered={true} />
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

          <div className="title">
            좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?
          </div>
        </TitleContainer>

        <MainContainer>
          <img src={UserImg} className="user-icon" alt="userIcon" />
          <div className="main-content-container">
            <div className="content-user-info-container">
              <div className="user-name">아초는고양이</div>
              <div className="content-ago">2주전</div>
            </div>

            {/* 답변하기인 경우 textarea 컴포넌트 보여주기 */}
            {state === 'answer' ? (
              <div className="textarea-container">
                <InputTextArea
                  placeholder="답변을 입력해주세요"
                  setAnswer={setAnswer}
                />
                <Button isValue={answer !== ''} brown={true} text="답변 완료" />
              </div>
            ) : (
              <div className="main-content">
                그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
                찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
                청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
                피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
                방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
                말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
                있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의
                것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서
                끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한
                영원히 듣기만 운다.
              </div>
            )}
          </div>
        </MainContainer>

        <div className="divider" />

        <Reaction />
      </PostCardContainer>
      {isOpenOption && <OptionMenu setSelectOption={setSelectedOption} />}
    </PostCardWrapper>
  )
}
export default PostCard

const OptionMenuArr = ['답변 거절', '답변 삭제', '질문 거절']

const OptionMenu = (porps) => {
  return (
    <OptionMenuContainer>
      {OptionMenuArr.map((e, index) => {
        return (
          <div
            key={index}
            className="optionMenuItem"
            onClick={() => porps.setSelectOption(e)}
          >
            {e}
          </div>
        )
      })}
    </OptionMenuContainer>
  )
}
