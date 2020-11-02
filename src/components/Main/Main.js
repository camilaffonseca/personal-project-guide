import styled from 'styled-components'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    max-height: 100vh;
    overflow-y: auto;
  }
`

export default Main
