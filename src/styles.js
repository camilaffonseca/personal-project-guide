import { createGlobalStyle } from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const GlobalStyle = createGlobalStyle`
  :root {
      --color-background-primary: #24292E;
      --color-background-secondary: #1B1D23;

      --color-text-primary: #9da5b4;
      --color-text-secondary: #959da5;

      font-size: 50%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: 0;
    background-color: var(--color-background-primary);
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

  p {
    font-size: 2.2rem;
  }

  * {
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
