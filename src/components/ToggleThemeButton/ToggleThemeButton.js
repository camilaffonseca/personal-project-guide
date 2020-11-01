import styled from 'styled-components'

import sunIcon from 'images/sun-icon.png'
import moonIcon from 'images/moon-icon.png'

import { TRANSITION_TIME } from 'helpers/constants'

const ToggleThemeButtonComponent = ({ currentTheme, toggleThemeCallback }) => {
  return (
    <ToggleThemeButton onClick={toggleThemeCallback}>
      {currentTheme === 'light' ? (
        <MoonImage src={moonIcon} alt='Button Icon' />
      ) : (
        <SunImage src={sunIcon} alt='Button Icon' />
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

const MoonImage = styled.img`
  width: 30px;
  animation: opacityInAnimation ${TRANSITION_TIME}s forwards 0s ease;

  @keyframes opacityInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const SunImage = styled(MoonImage)`
  filter: invert(100%);
`

export default ToggleThemeButtonComponent
