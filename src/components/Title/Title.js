import styled from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const Title = styled.p`
  color: ${({ theme }) => theme?.colors?.text?.primary};
  margin-bottom: 2.4rem;
  font-size: 3.2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: default;

  @media (min-width: ${TABLET_BREAKPOINT + 150}px) {
    font-size: 3.9rem;
  }
`

export default Title
