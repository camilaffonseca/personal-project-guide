import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT, TRANSITION_TIME } from 'helpers/constants'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 50%;
  }

  body {
    background-color: ${({ theme }) => theme?.colors?.backgrounds?.primary};
    font-size: 2rem;
  }

  body,
  #root {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme?.colors?.texts?.secondary};

    -o-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out;
    -moz-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out;
    -webkit-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out;
    transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    :root {
        font-size: 40%;
    }
  }
`

export default GlobalStyle
