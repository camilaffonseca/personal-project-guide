import styled from 'styled-components'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const Card = styled.div`
  background-color: ${({ theme }) => theme?.colors?.backgrounds?.secondary};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme?.colors?.borders?.primary};
  border-radius: 6px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5rem;
  padding: 2.6rem;

  @media (min-width: ${DESKTOP_BREAKPOINT - 150}px) {
    width: 90vw;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    width: 74vw;
  }
`

export default Card
