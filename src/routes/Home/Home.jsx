import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Container from 'components/Container'
import Card from 'components/Card'
import Text from 'components/Text'
import Image from 'components/Image'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import javascriptLogo from 'images/javascript-logo.png'

const Home = () => {
  return (
    <>
      <Container>
        <StyledImage src={pythonLogo} alt='Python Logo' />
        <StyledImage src={reactLogo} alt='React Logo' />
        <StyledImage src={javascriptLogo} alt='JavaScript Logo' />
      </Container>
      <Card>
        <Title>Guia de Projetos</Title>
        <Text>
          Não sei exatamente como tu vieste parar aqui, em que dia estamos ou que horas são agora. Mas já que estás
          aqui, faz um café e perde alguns minutos aqui comigo que nas próximas linhas eu vou te contar um pouco sobre
          como eu vim parar aqui. &#128522;
        </Text>
        <br />
        <Text>
          Primeiro queria falar sobre este projeto aqui. No momento em que escrevo isso ele ainda está sendo
          desenvolvido e está sendo um dos meus maiores desafios até então, visto que comecei com React há pouquíssimo
          tempo e que durante o desenvolvimento tenho entrado muito em contato com conteúdos não vistos até então, assim
          como tenho tido ainda mais envolvimento com Git e um entendimento maior sobre arquitetura de software, sobre
          como funciona um pull request e o processo de deploy, por exemplo. Basicamente, o propósito dele é mostrar um
          pouco de tudo que já fiz até agora, os projetos desenvolvidos, o meu processo de desenvolvimento, de estudos e
          o meu contexto atual.
        </Text>
      </Card>
    </>
  )
}

const StyledImage = styled(Image)`
  width: calc(15vw + 5rem);
  max-width: 15rem;
`

export default Home
