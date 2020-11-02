import { useState, useEffect } from 'react'
import styled from 'styled-components'

import menuIcon from 'images/menu-icon.png'

import { DESKTOP_BREAKPOINT, TRANSITION_TIME } from 'helpers/constants'

const NavbarComponent = ({ children }) => {
  let [userClick, setUserClick] = useState(false)
  let [showOutClickHandle, setShowOutClickHandle] = useState(false)
  let [inAnimationDelay, setInAnimationDelay] = useState(false)

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
      <Navbar isOpen={userClick}>{children}</Navbar>
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
  padding: 1.8rem;
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
  ${({ userClick }) => (userClick && 'display: block;')}
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

export default NavbarComponent
