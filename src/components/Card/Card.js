import styled from 'styled-components'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Card = styled.div`
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 2.6rem;

  @media (min-width: ${DESKTOP_BREAKPOINT - 150}px) {
    width: 85vw;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    width: 75vw;
  }
`

export default Card
