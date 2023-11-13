import styled from 'styled-components'
import { ReactComponent as Moon } from '../../asset/ToggleButton/Moon.svg'
import { ReactComponent as Button } from '../../asset/ToggleButton/Button.svg'
import { ReactComponent as Sun } from '../../asset/ToggleButton/Sun.svg'
import { useState } from 'react'

const ToggleBox = styled.div`
  width: 8rem;
  height: 4.1rem;
  border-radius: 4rem;
  background: ${({ $mode }) => ($mode ? '#ffc261;' : '#fff;')}
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  svg > circle{ fill: ${({ $mode }) => ($mode ? '#fff;' : '#000;')}}
  .button {
    position: absolute;
    top: 3px;
    left: ${({ $mode }) => ($mode ? '3px;' : '42px;')}
    transition: all 0.3s ease-in-out;
  }
  .dark-icon{
    position: absolute;
    top: 3px;
    left: 3px;
    visibility: ${({ $mode }) => ($mode ? 'hidden;' : 'visible;')}
    transition: all 0.3s ease-in-out;
  }
  .sun-icon{
    position: absolute;
    top: 3px;
    left: 42px;
    visibility: ${({ $mode }) => ($mode ? 'visible;' : 'hidden;')}
    transition: all 0.3s ease-in-out;
  }
`

function ToggleButton() {
  const [mode, setMode] = useState(true)

  function handleMode() {
    setMode(!mode)
  }
  return (
    <ToggleBox $mode={mode} onClick={handleMode}>
      {mode ? '' : <Moon className="dark-icon" />}
      <Button className="button" />
      {mode ? <Sun className="sun-icon" /> : ''}
    </ToggleBox>
  )
}

export default ToggleButton
