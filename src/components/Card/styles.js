import styled from 'styled-components'

import Card from './Card'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const MarginTopCard = styled(Card)`
  margin-top: 5rem;

  @media (min-width: 210px) {
    margin-top: calc(5rem + 6rem);
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    margin-top: 5rem;
  }
`

export { MarginTopCard }
