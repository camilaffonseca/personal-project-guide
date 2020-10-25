import React from 'react'

import Title from 'components/Title'
import Container from 'components/Container'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import javascriptLogo from 'images/javascript-logo.png'

import './App.css'

function App() {
  return (
    <>
      <Container>
        <img className='image' src={pythonLogo} alt="Python Logo"/>
        <img className='image' src={reactLogo} alt="React Logo"/>
        <img className='image' src={javascriptLogo} alt="JavaScript Logo"/>
      </Container>
      <Title>Guia de Projeto</Title>
    </>
  )
}

export default App
