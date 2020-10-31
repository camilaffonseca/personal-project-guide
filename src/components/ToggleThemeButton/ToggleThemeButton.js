import styled from 'styled-components'

import sunIcon from 'images/sun-icon.png'
import moonIcon from 'images/moon-icon.png'

const ToggleThemeButtonComponent = ({ currentTheme, toggleThemeCallback }) => {
  return (
    <ToggleThemeButton onClick={toggleThemeCallback}>
      {currentTheme === 'light' ? (
        <ButtonIcon currentTheme={currentTheme} src={moonIcon} alt='Button Icon' />
      ) : (
        <ButtonIcon currentTheme={currentTheme} src={sunIcon} alt='Button Icon' />
      )}
    </ToggleThemeButton>
  )
}

const ToggleThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    border: none;
  }
`

const ButtonIcon = styled.img`
  ${({ currentTheme }) => currentTheme === 'dark' && 'filter: invert(100%);'}
  width: 30px;
`

export default ToggleThemeButtonComponent
