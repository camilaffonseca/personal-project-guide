import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Container from 'components/Container'
import Card from 'components/Card'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import javascriptLogo from 'images/javascript-logo.png'

const App = () => {
  return (
    <>
      <Container>
        <Image className='image' draggable={false} src={pythonLogo} alt='Python Logo' />
        <Image className='image' draggable={false} src={reactLogo} alt='React Logo' />
        <Image className='image' draggable={false} src={javascriptLogo} alt='JavaScript Logo' />
      </Container>
      <Card>
        <Title>Guia de Projetos</Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga, delectus maiores magnam nisi iure deleniti ut perferendis in modi quae numquam nam? Cumque similique iure, impedit et provident repudiandae!
      </Card>
    </>
  )
}

const Image = styled.img`
  width: calc(15vw + 5rem);
  max-width: 15rem;

  &::selection {
    background: transparent;
  }
`

export default App
