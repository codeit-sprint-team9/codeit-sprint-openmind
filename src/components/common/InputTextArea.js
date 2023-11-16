import styled from 'styled-components'
import { useState } from 'react'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'

export const InputTextAreaStyledComponent = styled.div`
  padding: 1.6rem;
  border-radius: 0.8rem;
  ${({ $isFocus, $theme }) =>
    $theme === 'light'
      ? $isFocus && 'border: 0.1rem solid var(--brown-40, #542F1A);'
      : $isFocus && 'border: 0.1rem solid var(--orange);'}
  background: var(--gray-20, #F9F9F9);
  display: flex;
  align-items: center;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    padding: 0;
    background: var(--gray-20, #f9f9f9);
    font-size: 1.6rem;
    line-height: 2.2rem;
    &:focus {
      outline: 0;
    }
    &::placeholder {
      color: ${({ $isValue }) =>
        $isValue ? 'color: var(--gray-60, #000);' : 'var(--gray-40, #818181);'};
    }
  }
`

function InputTextArea({
  answer,
  setAnswer,
  placeholder = '질문을 입력해주세요',
  onKeyDown,
}) {
  const [isFocus, setIsFocus] = useState(false)
  const [isValue, setIsValue] = useState(false)
  const theme = useRecoilValue(darkMode)

  function inputFocus(e) {
    setIsFocus(!isFocus)
    e.target.value === '' ? setIsValue(false) : setIsValue(true)
  }
  return (
    <InputTextAreaStyledComponent
      $isFocus={isFocus}
      $isValue={isValue}
      $theme={theme}
    >
      <textarea
        placeholder={placeholder}
        onFocus={inputFocus}
        onBlur={inputFocus}
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        type="textarea"
        onKeyDown={(e) => {
          if (e.key === 'Enter') onKeyDown()
        }}
      />
    </InputTextAreaStyledComponent>
  )
}

export default InputTextArea
