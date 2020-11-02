import styled from 'styled-components'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Container = styled.div`
  width: 87vw;
  margin: calc(7.2rem + 15vw) 0 7.2rem 0;
  max-width: 100vw;
  display: flex;
  justify-content: space-around;

  @media (min-width: 210px) {
    margin: calc(7.2rem + 6rem) 0 7.2rem 0;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    width: calc(53vw + 5rem);
    max-width: 75rem;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    margin: 7.2rem 0;
  }
`

export default Container
