import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

import NavLink from 'components/NavLink'

import menuIcon from 'images/menu-icon.png'
import arrowLeftIcon from 'images/arrow-left-icon.png'
import arrowRightIcon from 'images/arrow-right-icon.png'

import { DESKTOP_BREAKPOINT, TRANSITION_TIME } from 'helpers/constants'

const NavbarComponent = ({ children, navLinks, currentTheme }) => {
  const [userClick, setUserClick] = useState(false)
  const [showOutClickHandle, setShowOutClickHandle] = useState(false)
  const [inAnimationDelay, setInAnimationDelay] = useState(false)
  const location = useLocation()

  const linkReducer = (accumulator, currentValue) => {
    const accumulatorList = accumulator
    accumulatorList.push(currentValue?.to)
    return accumulatorList
  }

  const linksRoutes = navLinks.reduce(linkReducer, [])

  useEffect(() => {
    if (userClick) {
      document.body.style.overflow = 'hidden'
      setShowOutClickHandle(true)

      const timer = setTimeout(() => {
        setInAnimationDelay(true)
      }, TRANSITION_TIME * 100)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = 'auto'
      setInAnimationDelay(false)

      const timer = setTimeout(() => {
        setShowOutClickHandle(false)
      }, TRANSITION_TIME * 1000)
      return () => clearTimeout(timer)
    }
  }, [userClick])

  return (
    <>
      <Topbar>
        <MenuIcon onClick={() => setUserClick(true)} src={menuIcon} alt='Menu Icon' />
      </Topbar>
      <Navbar isOpen={userClick}>
        <StyledChildrenContainer>{children}</StyledChildrenContainer>
        <StyledNavContainer>
          <StyledList>
            {navLinks.map(item => (
              <StyledListItem key={item?.to}>
                <NavLink onClick={() => setUserClick(false)} exact activeClassName='active-route' to={item?.to}>
                  {item?.name}
                </NavLink>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledNavContainer>
        <BottomNavButtons>
          <StyledLink to={linksRoutes[linksRoutes.indexOf(location?.pathname) - 1] || '#'}>
            <BottomButtonImage
              currentTheme={currentTheme}
              currentPath={location?.pathname}
              navLinks={navLinks}
              prev
              src={arrowLeftIcon}
              draggable={false}
              alt='Bottom Button Image Prev'
            />
          </StyledLink>
          <StyledLink to={linksRoutes[linksRoutes.indexOf(location?.pathname) + 1] || '#'}>
            <BottomButtonImage
              currentTheme={currentTheme}
              currentPath={location?.pathname}
              navLinks={navLinks}
              next
              src={arrowRightIcon}
              draggable={false}
              alt='Bottom Button Image Next'
            />
          </StyledLink>
        </BottomNavButtons>
      </Navbar>
      <OutClickHandleContainer
        userClick={userClick}
        showOutClickHandle={showOutClickHandle}
        onClick={() => setUserClick(false)}
        inAnimationDelay={inAnimationDelay}
      />
    </>
  )
}

const Navbar = styled.div`
  height: 100vh;
  width: 30rem;
  max-width: 80vw;
  padding: 1.8rem 0 1.8rem 1.8rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  ${({ isOpen }) => (isOpen ? 'transform: translateX(0);' : 'transform: translateX(-30rem);')};
  border-width: 0 1px 0 0;
  border-style: solid;
  border-color: ${({ theme }) => theme?.colors?.borders?.primary};
  background-color: ${({ theme }) => theme?.colors?.backgrounds?.secondary};

  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
`

const Topbar = styled.div`
  width: 100vw;
  height: 15vw;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.backgrounds?.secondary};
  position: fixed;
  top: 0;
  left: 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme?.colors?.borders?.primary};

  @media (min-width: 210px) {
    height: 6rem;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    display: none;
  }
`

const OutClickHandleContainer = styled.div`
  opacity: 0;
  ${({ showOutClickHandle }) => !showOutClickHandle && 'display: none;'}
  ${({ userClick }) => userClick && 'display: block;'}
  ${({ inAnimationDelay }) => (inAnimationDelay ? 'opacity: 1;' : 'opacity: 0;')}
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  @media (min-width: ${DESKTOP_BREAKPOINT + 300}px) {
    display: none;
  }
`

const MenuIcon = styled.img`
  width: 13vw;
  height: 9vw;
  margin-left: 5vw;
  cursor: pointer;

  &::selection {
    background: transparent;
  }

  @media (min-width: 210px) {
    width: 4rem;
    height: 3rem;
  }
`

const StyledList = styled.ul`
  list-style-type: none;
`

const StyledListItem = styled.li`
  margin: 3rem 0;
`

const StyledChildrenContainer = styled.div`
  margin-bottom: 2rem;
`

const StyledNavContainer = styled.nav`
  overflow-y: auto;
  padding-right: 1.8rem;
  height: 100%;
  max-height: calc(100vh - 3.6rem - 4rem - 2rem - 4rem - 1.8rem);
`

const BottomNavButtons = styled.div`
  height: 5.8rem;
  padding-top: 1.8rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-width: 1px 0 0px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme?.colors?.borders?.primary};
`

const BottomButtonImage = styled.img`
  cursor: pointer;
  ${({ currentTheme }) => (currentTheme === 'light' ? 'opacity: 0.6;' : '')}
  ${({ currentPath, navLinks, next, prev }) => {
    const firstLink = navLinks[0]?.to
    const lastLink = navLinks[navLinks.length - 1]?.to

    const disabled = 'opacity: 0.3;cursor: default;'
    if (prev) {
      if (currentPath === firstLink) {
        return disabled
      }
    }
    if (next) {
      if (currentPath === lastLink) {
        return disabled
      }
    }
  }}


  width: 3rem;
  &::selection {
    background: transparent;
  }
`

const StyledLink = styled(Link)`
  cursor: default;
`

export default NavbarComponent
