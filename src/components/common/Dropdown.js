import { useState } from 'react'
import styled from 'styled-components'
import arrowDownIcon from '../../asset/Dropdown/icon-arrow-down.svg'
import arrowUpIcon from '../../asset/Dropdown/icon-arrow-up.svg'

const DropdownNameItem = styled.div`
  padding: 6px 16px;
  text-align: center;
  color: ${({ $selected }) =>
    $selected === '이름순'
      ? 'var(--blue-50, #1877F2);'
      : 'var(--gray-50, #515151);'}
  font-weight: 500;
  font-size: 14px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  &:hover {
    background: var(--gray-20, #f9f9f9);
  }
`

const DropdownNewItem = styled(DropdownNameItem)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: ${({ $selected }) =>
    $selected === '최신순'
      ? 'var(--blue-50, #1877F2);'
      : 'var(--gray-50, #515151);'};
`

const DropdownItems = styled.div`
  border-radius: 8px;
  border: 1px solid var(--gray-30, #cfcfcf);
  background: var(--gray-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  width: 90px;
  position: absolute;
  top: 40px;
  left: -1px;
  display: ${({ $open }) => ($open ? 'none' : '')};
  z-index: 1;
`

const DropdownBoxStyledComponent = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ $open }) =>
    $open ? 'var(--grayscale-40, #818181);' : 'var(--grayscale-60, #000);'}
  background: var(--gray-10, #fff);
  width: 90px;
  cursor: pointer;
  position: relative;
  color: ${({ $open }) =>
    $open ? 'var(--gray-40, #818181);' : 'color: var(--grayscale-60, #000);'};
`

const DropdownFlexBoxStyledComponent = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`

function Dropdown() {
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState('이름순')

  function handleClick() {
    setOpen(!open)
  }

  function handleSelected(e) {
    setSelected(e.target.textContent)
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
        <DropdownNameItem onClick={handleSelected} $selected={selected}>
          이름순
        </DropdownNameItem>
        <DropdownNewItem onClick={handleSelected} $selected={selected}>
          최신순
        </DropdownNewItem>
      </DropdownItems>
    </DropdownBoxStyledComponent>
  )
}

export default Dropdown
