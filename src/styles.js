import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const GlobalStyle = createGlobalStyle`
  :root {
      --color-background-primary: #24292E;
      --color-background-secondary: #31363F;

      --color-text-primary: #9da5b4;
      --color-text-secondary: #959da5;

      --color-border-primary: #181a1f;

      font-size: 50%;
  }

  body {
    background-color: var(--color-background-primary);
    font-size: 2rem;
  }

  body,
  #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: var(--color-text-secondary);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    :root {
        font-size: 40%;
    }
  }
`

export default GlobalStyle
