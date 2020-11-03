import styled from 'styled-components'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const ExternalLinkComponent = ({ children, href, msg, ...props }) => (
  <ExternalLink rel='noopener noreferrer' href={href} target='_blank' {...props}>
    <span>{children}</span>
    <div>{msg}</div>
  </ExternalLink>
)

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.texts?.primary};
  opacity: 0.8;
  cursor: pointer;
  border-width: 1px;
  padding: 1rem;
  margin: 1rem 0;
  width: 60vw;
  text-align: center;
  border-style: solid;
  border-color: ${({ theme }) => theme?.colors?.borders?.primary};
  border-radius: 8px;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme?.colors?.borders?.secondary};
  }
  &:active,
  &:visited {
    color: ${({ theme }) => theme?.colors?.texts?.primary};
  }

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    max-width: 30rem;
  }
`

export default ExternalLinkComponent
