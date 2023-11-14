import { useState } from 'react'
import styled, { css } from 'styled-components'
import arrowDownIcon from '../../asset/Dropdown/icon-arrow-down.svg'
import arrowUpIcon from '../../asset/Dropdown/icon-arrow-up.svg'

const DropdownItem = css`
  padding: 0.6rem 2rem 1.2rem 0.6rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    background: var(--gray-20, #f9f9f9);
  }
`

const DropdownNameItem = styled.div`
  ${DropdownItem};
  padding-top: 1rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  color: ${({ $selected }) =>
    $selected === '이름순'
      ? 'var(--blue, #1877F2);'
      : 'var(--gray-50, #515151);'};
`

const DropdownNewItem = styled.div`
  ${DropdownItem}
  padding-bottom: 1rem;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  color: ${({ $selected }) =>
    $selected === '최신순'
      ? 'var(--blue, #1877F2);'
      : 'var(--gray-50, #515151);'};
`

const DropdownItems = styled.div`
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray-30, #cfcfcf);
  background: var(--gray-10, #fff);
  box-shadow: 0 0.4rem 0.4rem 0 rgba(140, 140, 140, 0.25);
  width: 7.9rem;
  position: absolute;
  top: 4rem;
  left: -0.1rem;
  display: ${({ $open }) => ($open ? 'none' : '')};
  z-index: 1;
`

const DropdownBoxStyledComponent = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $open }) =>
    $open ? 'var(--gray-40, #818181);' : 'var(--gray-60, #000);'}
  background: var(--gray-10, #fff);
  width: 7.9rem;
  word-break: keep-all;
  cursor: pointer;
  position: relative;
  color: ${({ $open }) =>
    $open ? 'var(--gray-40, #818181);' : 'color: var(--gray-60, #000);'};
`

const DropdownFlexBoxStyledComponent = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
`

function Dropdown({ handleSort, order }) {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState(
    order === 'time' ? '최신순' : '이름순'
  )

  function handleClick() {
    setOpen(!open)
  }

  function handleSelected(e) {
    setSelected(e)
    handleSort(e === '최신순' ? 'time' : 'name')
  }

  return (
    <DropdownBoxStyledComponent onClick={handleClick} $open={open}>
      <DropdownFlexBoxStyledComponent>
        {selected}
        {open ? (
          <img src={arrowDownIcon} alt="arrowDownIcon" />
        ) : (
          <img src={arrowUpIcon} alt="arrowUpIcon" />
        )}
      </DropdownFlexBoxStyledComponent>
      <DropdownItems $open={open}>
        <DropdownNameItem
          onClick={() => handleSelected('이름순')}
          $selected={selected}
        >
          이름순
        </DropdownNameItem>
        <DropdownNewItem
          onClick={() => handleSelected('최신순')}
          $selected={selected}
        >
          최신순
        </DropdownNewItem>
      </DropdownItems>
    </DropdownBoxStyledComponent>
  )
}

export default Dropdown
