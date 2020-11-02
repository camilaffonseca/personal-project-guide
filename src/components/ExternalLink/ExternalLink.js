import styled from 'styled-components'

const ExternalLinkComponent = ({ children, href, ...props }) => (
  <ExternalLink rel='noopener noreferrer' href={href} target='_blank' {...props}>{children}</ExternalLink>
)

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.texts?.primary};
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:active,
  &:visited {
    color: ${({ theme }) => theme?.colors?.texts?.primary};
  }
`

export default ExternalLinkComponent
