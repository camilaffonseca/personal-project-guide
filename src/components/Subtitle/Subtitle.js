import styled from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const Subtitle = styled.p`
  color: ${({ theme }) => theme?.colors?.text?.primary};
  width: 100%;
  text-align: left;
  margin: 4rem 0 1.9rem 0;
  font-size: 2.33rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: default;

  @media (min-width: ${TABLET_BREAKPOINT + 150}px) {
    font-size: 2.65rem;
  }
`

export default Subtitle
