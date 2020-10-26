import styled from 'styled-components'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Container = styled.div`
  width: 87vw;
  max-width: 580px;
  margin: 7.2rem 0;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    width: calc(53vw + 5rem);
  }
`

export default Container
