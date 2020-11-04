import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { TRANSITION_TIME } from 'helpers/constants'

const ImageComponent = ({ disableZoomFunction = false, ...props }) => {
  const [imageClick, setImageClick] = useState(false)
  const [handleBackgroundAnimation, setHandleBackgroundAnimation] = useState(false)
  const [handleBackgroundDisplay, setHandleBackgroundDisplay] = useState(false)

  useEffect(() => {
    if (imageClick) {
      document.body.style.overflow = 'hidden'
      setHandleBackgroundDisplay(true)
      const timer = setTimeout(() => {
        setHandleBackgroundAnimation(true)
      }, TRANSITION_TIME * 100)

      return () => clearTimeout(timer)
    } else {
      setHandleBackgroundAnimation(false)
    }
  }, [imageClick])

  useEffect(() => {
    if (!imageClick) {
      setHandleBackgroundAnimation(false)
      const timer = setTimeout(() => {
        document.body.style.overflow = 'auto'
        setHandleBackgroundDisplay(false)
      }, TRANSITION_TIME * 800)

      return () => clearTimeout(timer)
    }
  }, [imageClick])

  return (
    <>
      {handleBackgroundDisplay && (
        <BackgroundContainer
          handleBackgroundAnimation={handleBackgroundAnimation}
          onClick={() => setImageClick(!imageClick)}
        >
          <Image
            inZoom
            handleBackgroundDisplay={handleBackgroundDisplay}
            disableZoomFunction={disableZoomFunction}
            {...props}
            onClick={() => setImageClick(!disableZoomFunction && !imageClick)}
            draggable={false}
          />
        </BackgroundContainer>
      )}
      <Image
        handleBackgroundDisplay={handleBackgroundDisplay}
        disableZoomFunction={disableZoomFunction}
        {...props}
        onClick={() => setImageClick(!disableZoomFunction === true)}
        draggable={false}
      />
    </>
  )
}

const Image = styled.img`
  max-width: 90%;
  ${({ disableZoomFunction }) => (disableZoomFunction ? '' : 'cursor: zoom-in;')}

  ${({ handleBackgroundDisplay, inZoom }) =>
    handleBackgroundDisplay && inZoom
      ? css`
          position: relative;
          width: 90vw !important;
          max-width: 150rem !important;
          margin: 0 !important;
          width: 100%;
          object-fit: cover;
          z-index: 4;
          cursor: zoom-out;
        `
      : ''}

  &::selection {
    background: transparent;
  }
`

const BackgroundContainer = styled.div`
  opacity: 0;

  ${({ handleBackgroundAnimation }) =>
    handleBackgroundAnimation &&
    css`
      opacity: 1;
    `}

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
`

export default ImageComponent
