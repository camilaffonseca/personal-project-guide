import styled from 'styled-components'

import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from 'helpers/constants'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  max-width: 1180px;
  margin: 9rem 0 3rem 0;

  @media (min-width: ${TABLET_BREAKPOINT + 200}px) {
    padding: 0 64px;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    margin-top: 2rem;
  }
`

export default Container
