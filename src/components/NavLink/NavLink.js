import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavLinkComponent = styled(NavLink)`
  color: ${({ theme }) => theme?.colors?.texts?.primary };
  opacity: 0.7;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`

export default NavLinkComponent
