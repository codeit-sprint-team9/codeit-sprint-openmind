import styled from 'styled-components'
import { useState } from 'react'

const InputTextAreaStyledComponent = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ $isFocus }) =>
    $isFocus ? 'var(--brown-40, #542F1A);' : 'var(--gray-20, #F9F9F9);'}
  background: var(--gray-10, #fff);
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Pretendard;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    &:focus {
        outline: 0;
    }
    &::placeholder {
      color: ${({ $isValue }) =>
        $isValue ? 'color: var(--gray-60, #000);' : 'var(--gray-40, #818181);'}
    }
  } 
`

function InputTextArea({ isValue, setIsValue }) {
  const [isFocus, setIsFocus] = useState(false)

  function inputFocus(e) {
    setIsFocus(!isFocus)
    e.target.value === '' ? setIsValue(false) : setIsValue(true)
  }
  return (
    <InputTextAreaStyledComponent $isFocus={isFocus} $isValue={isValue}>
      <textarea
        placeholder="이름을 입력하세요"
        onFocus={inputFocus}
        onBlur={inputFocus}
        type="textarea"
      />
    </InputTextAreaStyledComponent>
  )
}

export default InputTextArea
