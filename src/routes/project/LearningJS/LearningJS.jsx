import { Helmet } from 'react-helmet'

import { MarginTopCard } from 'components/Card'
import { MarginBottomImage } from 'components/Image'
import Title from 'components/Title'
import Text from 'components/Text'
import Main from 'components/Main'
import Subtitle from 'components/Subtitle'
import BottomContainer from 'components/BottomContainer'
import ExternalLink from 'components/ExternalLink'

import learningJsImage from 'images/projects/learning-js.gif'

const LearningJS = () => (
  <Main>
    <Helmet>
      <title>Learning JS</title>
    </Helmet>
    <MarginTopCard>
      <Title>Learning JS</Title>
      <MarginBottomImage src={learningJsImage} alt='Project Image' />
      <Subtitle>Propósito</Subtitle>
      <Text>Learning JS é um projeto onde são concentrados meus exercícios e testes em JavaScript.</Text>
      <Subtitle>Até então</Subtitle>
      <Text>
        Neste momento os exercícios são reescritas de aplicações anteriormente implementadas em Python, e que são de
        funcionalidade interessante quando se trata de JavaScript. Ainda há muito por vir por aqui {':)'}
      </Text>
      <BottomContainer>
        <ExternalLink href='https://github.com/camilaffonseca/todos-app'>Repositório no Github</ExternalLink>
      </BottomContainer>
    </MarginTopCard>
  </Main>
)

export default LearningJS
