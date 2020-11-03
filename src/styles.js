import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT, TRANSITION_TIME } from 'helpers/constants'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 50%;
  }

  ::-webkit-scrollbar {
    width:12px;
    background: ${({ theme }) => theme?.colors?.scroll?.primary};
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme?.colors?.scroll?.primary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme?.colors?.scroll?.secondary};
  }

  body {
    background-color: ${({ theme }) => theme?.colors?.backgrounds?.primary};
    font-size: 2rem;
  }

  body,
  #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: row;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme?.colors?.texts?.secondary};

    ${({ loadedFirstTime }) =>
      loadedFirstTime
        ? `
    -o-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out,
      transform ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    -moz-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out,
      transform ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    -webkit-transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out,
      transform ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    transition: background-color ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      color ${TRANSITION_TIME}s ease-in-out,
      transform ${TRANSITION_TIME - 0.2}s ease,
      opacity ${TRANSITION_TIME}s ease`
        : `
    -o-transition: transform ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    -moz-transition: transform ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    -webkit-transition: transform ${TRANSITION_TIME}s ease-in-out,
      border-color ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease-in-out;
    transition: transform ${TRANSITION_TIME - 0.2}s ease,
      border-color ${TRANSITION_TIME}s ease-in-out,
      opacity ${TRANSITION_TIME}s ease;
    `}
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  .active-route {
    ${({ theme }) => theme?.colors?.texts?.primary};
    opacity: 1;
    font-weight: 600;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    :root {
        font-size: 40%;
    }
  }
`

export default GlobalStyle
