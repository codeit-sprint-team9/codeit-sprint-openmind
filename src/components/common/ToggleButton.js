import styled from 'styled-components'
import { ReactComponent as Moon } from '../../asset/ToggleButton/Moon.svg'
import { ReactComponent as Button } from '../../asset/ToggleButton/Button.svg'
import { ReactComponent as Sun } from '../../asset/ToggleButton/Sun.svg'
import { useRecoilState } from 'recoil'
import { darkMode } from '../../recoil/theme'

const ToggleBox = styled.div`
  width: 8rem;
  height: 4.1rem;
  border-radius: 4rem;
  background: ${({ $theme }) => ($theme === 'light' ? '#ffc261;' : '#fff;')}
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  svg > circle{ fill: ${({ $theme }) =>
    $theme === 'light' ? '#fff;' : '#000;'}}
  .button {
    position: absolute;
    top: 3px;
    left: ${({ $theme }) => ($theme === 'light' ? '3px;' : '42px;')}
    transition: all 0.3s ease-in-out;
  }
  .dark-icon{
    position: absolute;
    top: 5px;
    left: 5px;
    visibility: ${({ $theme }) => ($theme === 'light' ? 'hidden;' : 'visible;')}
    transition: all 0.3s ease-in-out;
  }
  .sun-icon{
    position: absolute;
    top: 5px;
    left: 44px;
    visibility: ${({ $theme }) => ($theme === 'light' ? 'visible;' : 'hidden;')}
    transition: all 0.3s ease-in-out;
  }
`

function ToggleButton() {
  const [theme, setTheme] = useRecoilState(darkMode)

  function handleTheme() {
    if (theme === 'light') {
      localStorage.setItem('darkMode', 'dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      localStorage.setItem('darkMode', 'light')
      setTheme('light')
    }
  }
  return (
    <ToggleBox $theme={theme} onClick={handleTheme}>
      {theme === 'light' ? '' : <Moon className="dark-icon" />}
      <Button className="button" />
      {theme === 'light' ? <Sun className="sun-icon" /> : ''}
    </ToggleBox>
  )
}

export default ToggleButton
