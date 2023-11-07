import styled from 'styled-components'
import personIcon from '../../asset/InputField/input-icon-person.svg'
import { useState } from 'react'

const InputFieldStyledComponent = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ $isFocus }) =>
    $isFocus ? 'var(--brown-40, #542F1A);' : 'var(--gray-40, #818181);'}
  background: var(--gray-10, #fff);
  display: flex;
  align-items: center;
  gap: 4px;
  width: 336px;
  font-family: Pretendard;
  input {
    width: 100%;
    &::placeholder {
      color: ${({ $isValue }) =>
        $isValue ? 'color: var(--gray-60, #000);' : 'var(--gray-40, #818181);'}
    }
  } 
`

function InputField({ isValue, setIsValue }) {
  const [isFocus, setIsFocus] = useState(false)

  function inputFocus(e) {
    setIsFocus(!isFocus)
    e.target.value === '' ? setIsValue(false) : setIsValue(true)
  }
  return (
    <InputFieldStyledComponent $isFocus={isFocus} $isValue={isValue}>
      <img src={personIcon} alt="personIcon" />
      <input
        placeholder="이름을 입력하세요"
        onFocus={inputFocus}
        onBlur={inputFocus}
      />
    </InputFieldStyledComponent>
  )
}

export default InputField
