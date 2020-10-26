import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Container from 'components/Container'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import javascriptLogo from 'images/javascript-logo.png'

const App = () => {
  return (
    <>
      <Container>
        <Image className='image' src={pythonLogo} alt='Python Logo' />
        <Image className='image' src={reactLogo} alt='React Logo' />
        <Image className='image' src={javascriptLogo} alt='JavaScript Logo' />
      </Container>
      <Title>Guia de Projetos</Title>
    </>
  )
}

const Image = styled.img`
  width: calc(15vw + 5rem);
  max-width: 15rem;
`

export default App
