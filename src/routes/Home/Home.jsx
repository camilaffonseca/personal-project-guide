import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Container from 'components/Container'
import Card from 'components/Card'
import Text from 'components/Text'
import Image from 'components/Image'
import Main from 'components/Main'

import pythonLogo from 'images/python-logo.png'
import reactLogo from 'images/react-logo.png'
import javascriptLogo from 'images/javascript-logo.png'

const Home = () => {
  return (
    <Main>
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
          Bom, vou começar te contando que a tecnologia sempre foi algo curioso pra mim. E claro, como era de se
          esperar, a minha curiosidade só me rendeu sistemas operacionais corrompidos e uma péssima reputação de
          destruidora de computadores. “Não dá pra deixar essas coisas na mão dessa guria, ela mexe no que não sabe, depois não funciona nada”.
        </Text>
        <br />
        <Text>
          Só comecei a fazer algo útil com essa curiosidade quando, com um interesse absurdo no assunto e um total de
          <span style={{ fontWeight: 600, fontSize: '2.03rem' }}> zero</span> conhecimentos, caí de paraquedas no
          desenvolvimento web com o curso da MooDev.
        </Text>
        <Text>
          O curso foi o que me deu um norte, porque até então eu era a pessoa que achava que HTML era linguagem de
          programação, não sabia da existência do CSS e nem o que o JavaScript fazia com isso tudo.
        </Text>
        <br />
        <Text>
          Aprendi os fundamentos da web, a base que eu precisava. Fiz alguns projetos toscos com HTML, CSS e JavaScript,
          que para mim ainda era um bicho de sete cabeças, adquiri uma noção básica de Git e Github, tentei entender e
          até testei - muito superficialmente - alguns frameworks e bibliotecas. Mas comecei a ter noção de que, apesar
          de saber absurdamente mais do que antes, eu ainda sabia muito pouco. O sentimento de que estar envolvida nesse
          meio era algo utópico para mim acabou me segurando muito e não dei continuidade aos estudos por alguns meses.
        </Text>
      </Card>
    </Main>
  )
}

const StyledImage = styled(Image)`
  width: calc(15vw + 5rem);
  max-width: 15rem;
`

export default Home
