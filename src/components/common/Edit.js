import styled from 'styled-components'
import editIcon from '../../asset/Edit/dropdown-list-icon-edit.svg'

const EditBoxStyledComponent = styled.div`
  display: flex;
  width: 115px;
  padding: 10px 16px;
  text-align: center;
  background-color: red;
  border-radius: 8px;
  border: 1px solid var(--gray-30, #cfcfcf);
  background: var(--gray-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  color: var(--gray-50, #515151);
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  cursor: pointer;
  &:hover {
    background: var(--gray-20, #f9f9f9);
    color: var(--gray-60, #000);
    img {
      filter: invert(0%) sepia(4%) saturate(1000%) hue-rotate(100deg)
        brightness(0%) contrast(105%);
    }
  }
  &:active {
    background: var(--gray-10, #fff);
    color: var(--blue-50, #1877f2);
    img {
      filter: invert(36%) sepia(100%) saturate(3148%) hue-rotate(203deg)
        brightness(99%) contrast(92%);
    }
  }
`

const EditStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

function Edit() {
  return (
    <EditBoxStyledComponent>
      <EditStyledComponent>
        <img src={editIcon} alt="editIcon" />
        수정하기
      </EditStyledComponent>
    </EditBoxStyledComponent>
  )
}

export default Edit
