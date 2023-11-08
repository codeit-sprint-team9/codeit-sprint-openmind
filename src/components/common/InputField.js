import styled from 'styled-components'
import personIcon from '../../asset/InputField/input-icon-person.svg'
import { useState } from 'react'

const InputFieldStyledComponent = styled.div`
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $isFocus }) =>
    $isFocus ? 'var(--brown-40, #542F1A);' : 'var(--gray-40, #818181);'}
  background: var(--gray-10, #fff);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 33.6rem  ;
  font-size: 1.6rem;
  line-height: 2.2rem;
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
